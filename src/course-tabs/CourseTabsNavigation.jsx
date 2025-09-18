import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "@edx/frontend-platform/i18n";
import { getConfig } from "@edx/frontend-platform";

import classNames from "classnames";

import messages from "./messages";
import Tabs from "../generic/tabs/Tabs";
import { CoursewareSearch, CoursewareSearchToggle } from "../course-home/courseware-search";
import { useCoursewareSearchState } from "../course-home/courseware-search/hooks";
import { useModel } from "../generic/model-store";
import { createJitsiToken, getUserInfo, createJitsiMeetingUrl } from "../shared/jitsi-service";

// Helper function để lấy JWT token từ cookie
const getJWTTokenFromCookie = () => {
  try {
    const jwtCookie = document.cookie.split("; ").find((row) => row.startsWith("edx-jwt-cookie-header-payload="));

    if (jwtCookie) {
      const jwtToken = jwtCookie.split("=")[1];
      console.log("🔑 JWT Token từ cookie:", jwtToken);
      return jwtToken;
    } else {
      console.warn("⚠️ Không tìm thấy edx-jwt-cookie-header-payload cookie");
      return null;
    }
  } catch (error) {
    console.error("❌ Lỗi khi lấy JWT token từ cookie:", error);
    return null;
  }
};

const CourseTabsNavigation = ({ activeTabSlug, className, tabs, courseId }) => {
  const intl = useIntl();
  const config = getConfig();
  const { show } = useCoursewareSearchState();
  const [isLoadingJitsiToken, setIsLoadingJitsiToken] = useState(false);

  // Lấy thông tin khóa học từ model store
  const courseInfo = useModel("courseHomeMeta", courseId);

  // Log thông tin user từ JWT
  const currentUserInfo = getUserInfo();

  // Thêm course info vào window để có thể access từ console
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.currentCourseId = courseId;
      window.currentCourseInfo = courseInfo;
      window.currentUserInfo = currentUserInfo;
      window.getJWTTokenFromCookie = getJWTTokenFromCookie;
      window.handleCaseStudyClick = handleCaseStudyClick;
      console.log("🧪 Course data available in window:");
      console.log("- window.currentCourseId - Current course ID");
      console.log("- window.currentCourseInfo - Current course info");
      console.log("- window.currentUserInfo - Current user info");
      console.log("- window.getJWTTokenFromCookie() - Get JWT token from cookie");
      console.log("- window.handleCaseStudyClick() - Test CaseStudy SSO");
    }
  }, [courseId, courseInfo, currentUserInfo]);

  // Xử lý click vào CaseStudy link
  const handleCaseStudyClick = (e) => {
    e.preventDefault();

    try {
      console.log("=== CASESTUDY SSO AUTHENTICATION ===");

      // Lấy JWT token từ cookie
      const jwtToken = getJWTTokenFromCookie();

      if (jwtToken) {
        // Tạo URL SSO với token
        const ssoUrl = `https://caseuniverse.duytan.edu.vn/sso/callback?token=${jwtToken}`;

        console.log("🚀 Opening CaseStudy with SSO:", ssoUrl);
        console.log("🔑 Token length:", jwtToken.length);

        // Mở CaseStudy trong tab mới với SSO
        window.open(ssoUrl, "_blank", "noopener,noreferrer");
      } else {
        // Fallback: mở CaseStudy mà không có SSO
        const fallbackUrl = "https://caseuniverse.duytan.edu.vn";
        console.log("🏠 Fallback: Opening CaseStudy without SSO:", fallbackUrl);
        window.open(fallbackUrl, "_blank", "noopener,noreferrer");
      }

      console.log("=== CASESTUDY SSO COMPLETED ===");
    } catch (error) {
      console.error("❌ Error in CaseStudy SSO:", error);
      // Fallback nếu có lỗi
      window.open("https://caseuniverse.duytan.edu.vn", "_blank", "noopener,noreferrer");
    }
  };

  // Xử lý click vào Meeting link
  const handleMeetingClick = async (e) => {
    e.preventDefault();
    setIsLoadingJitsiToken(true);

    try {
      console.log("=== CREATING JITSI TOKEN ===");

      const userInfo = getUserInfo();
      const courseData = {
        courseId: courseId,
        title: courseInfo.title || "Unknown Course",
        org: courseInfo.org || "Unknown Org",
      };

      console.log("User Info:", userInfo);
      console.log("Course Data for token:", courseData);

      // Tạo token Jitsi
      const token = await createJitsiToken(courseData, userInfo);
      console.log("Generated Jitsi Token:", token);

      console.log("============================");
      // Tạo URL với token
      const meetingUrl = createJitsiMeetingUrl(courseId, token);

      console.log("Generated Meeting URL:", meetingUrl);
      console.log("============================");

      // Mở meeting trong tab mới
      window.open(meetingUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error handling meeting click:", error);
      // Fallback: mở meeting không có token
      const fallbackUrl = createJitsiMeetingUrl(courseId, null);
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    } finally {
      setIsLoadingJitsiToken(false);
    }
  };

  // Add custom styles for hover effects
  const customStyles = `
    <style>
      .nav-link:hover {
        color: #d32f2f !important;
        background-color: #F3F4F6 !important;
      }
      .nav-link:hover svg {
        color: #d32f2f !important;
      }
    </style>
  `;

  return (
    <div id="courseTabsNavigation" className={classNames("course-tabs-navigation", className)}>
      <div dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="container-xl">
        <div className="nav-bar">
          <div className="nav-menu">
            <Tabs className="nav-underline-tabs" aria-label={intl.formatMessage(messages.courseMaterial)}>
              {tabs.map(({ url, title, slug }) => (
                <a
                  key={slug}
                  className={classNames("nav-item flex-shrink-0 nav-link", {
                    "active active-tab": slug === activeTabSlug,
                  })}
                  href={url}
                >
                  {title}
                </a>
              ))}
              <a
                className={classNames("nav-item flex-shrink-0 nav-link")}
                href="#"
                onClick={handleCaseStudyClick}
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  style={{ marginRight: "6px" }}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3.25001H6.75C6.10713 3.23114 5.483 3.4679 5.01439 3.9084C4.54577 4.3489 4.2709 4.9572 4.25 5.60001V18C4.27609 18.7542 4.60027 19.4673 5.15142 19.9829C5.70258 20.4984 6.43571 20.7743 7.19 20.75H19C19.1981 20.7474 19.3874 20.6676 19.5275 20.5275C19.6676 20.3874 19.7474 20.1981 19.75 20V4.00001C19.7474 3.8019 19.6676 3.61264 19.5275 3.47254C19.3874 3.33245 19.1981 3.2526 19 3.25001ZM18.25 19.25H7.19C6.83339 19.2748 6.48151 19.1571 6.21156 18.9227C5.94161 18.6884 5.77562 18.3566 5.75 18C5.77562 17.6435 5.94161 17.3116 6.21156 17.0773C6.48151 16.843 6.83339 16.7253 7.19 16.75H18.25V19.25ZM18.25 15.25H7.19C6.68656 15.2506 6.19135 15.3778 5.75 15.62V5.60001C5.7729 5.3559 5.89028 5.13039 6.0771 4.9716C6.26392 4.8128 6.50538 4.73329 6.75 4.75001H18.25V15.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.75 8.75H15.25C15.4489 8.75 15.6397 8.67098 15.7803 8.53033C15.921 8.38968 16 8.19891 16 8C16 7.80109 15.921 7.61032 15.7803 7.46967C15.6397 7.32902 15.4489 7.25 15.25 7.25H8.75C8.55109 7.25 8.36032 7.32902 8.21967 7.46967C8.07902 7.61032 8 7.80109 8 8C8 8.19891 8.07902 8.38968 8.21967 8.53033C8.36032 8.67098 8.55109 8.75 8.75 8.75Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.75 12.25H15.25C15.4489 12.25 15.6397 12.171 15.7803 12.0303C15.921 11.8897 16 11.6989 16 11.5C16 11.3011 15.921 11.1103 15.7803 10.9697C15.6397 10.829 15.4489 10.75 15.25 10.75H8.75C8.55109 10.75 8.36032 10.829 8.21967 10.9697C8.07902 11.1103 8 11.3011 8 11.5C8 11.6989 8.07902 11.8897 8.21967 12.0303C8.36032 12.171 8.55109 12.25 8.75 12.25Z"
                    fill="currentColor"
                  />
                </svg>
                CaseStudy
              </a>
              <a
                className={classNames("nav-item flex-shrink-0 nav-link", {
                  disabled: isLoadingJitsiToken,
                })}
                href="#"
                onClick={handleMeetingClick}
                style={{
                  cursor: isLoadingJitsiToken ? "wait" : "pointer",
                  opacity: isLoadingJitsiToken ? 0.6 : 1,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  style={{ marginRight: "6px" }}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isLoadingJitsiToken ? "Creating Meeting..." : "Meeting"}
              </a>
            </Tabs>
          </div>
          <div className="search-toggle">
            <CoursewareSearchToggle />
          </div>
        </div>
      </div>
      {show && <CoursewareSearch />}
    </div>
  );
};

CourseTabsNavigation.propTypes = {
  activeTabSlug: PropTypes.string,
  className: PropTypes.string,
  courseId: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

CourseTabsNavigation.defaultProps = {
  activeTabSlug: undefined,
  className: null,
};

export default CourseTabsNavigation;
