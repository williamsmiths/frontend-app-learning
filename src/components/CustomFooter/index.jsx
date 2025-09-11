import React from "react";
import PropTypes from "prop-types";
import { getConfig } from "@edx/frontend-platform";

import "./index.scss";

const CustomFooter = ({ links, contactInfo }) => {
  const config = getConfig();
  const logoUrl = config.LOGO_URL;

  // Default links if not provided
  const defaultLinks = [
    { href: "/about", text: "About Us" },
    { href: "/blog", text: "Blog" },
    { href: "/donate", text: "Donate" },
    { href: "/tos", text: "Terms of Service" },
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/help", text: "Help" },
    { href: "/contact", text: "Contact Us" },
  ];

  // Default contact info if not provided
  const defaultContactInfo = {
    address: "254 Nguyễn Văn Linh, P. Thanh Khê, Tp. Đà Nẵng, Việt Nam",
    phone: "(+84) 236.3650403",
    phoneHref: "tel:+842363650403",
    website: "tuyensinh.duytan.edu.vn",
    websiteHref: "http://tuyensinh.duytan.edu.vn",
  };

  const footerLinks = links || defaultLinks;
  const contact = { ...defaultContactInfo, ...contactInfo };
  const currentYear = new Date().getFullYear();

  return (
    <div className="wrapper wrapper-footer">
      <footer id="footer" className="tutor-container">
        <div className="footer-content">
          <div className="footer-grid">
            {/* University Branding Section */}
            <div className="university-info">
              <div className="d-flex justify-content-start mb-3">
                <a
                  href="https://duytan.edu.vn/"
                  rel="noopener"
                  target="_blank"
                  className="university-logo"
                  aria-label="Duy Tan University"
                >
                  <img src={logoUrl} alt="Duy Tan University" width="160" />
                </a>
                <a
                  href="https://scs.duytan.edu.vn/"
                  rel="noopener"
                  target="_blank"
                  className="cvs-logo ml-3"
                  aria-label="SCS Duy Tan University"
                >
                  <img src="/logo_scs.png" alt="SCS Duy Tan University" width="100" />
                </a>
                <a
                  href="https://cvs.duytan.edu.vn/"
                  rel="noopener"
                  target="_blank"
                  className="cvs-logo ml-3"
                  aria-label="CVS Duy Tan University"
                >
                  <img src="/cvs.png" alt="CVS Duy Tan University" width="100" />
                </a>
              </div>
              <p className="university-description" style={{ textAlign: "justify", overflowWrap: "break-word" }}>
                Universe là nền tảng eLearning hiện đại của Đại học Duy Tân, cung cấp các khóa học trực tuyến đa lĩnh
                vực từ ngôn ngữ, công nghệ, kinh tế đến y dược. Học tập linh hoạt, toàn diện, mọi lúc mọi nơi, cùng
                giảng viên giàu kinh nghiệm và chứng chỉ uy tín.
              </p>
            </div>

            {/* Navigation Links Section */}
            <div className="footer-links">
              <h3>Liên kết</h3>
              <ul>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="contact-info-ft">
              <h3>Liên hệ</h3>
              <div className="contact-item">
                <p>{contact.address}</p>
              </div>
              <div className="contact-item">
                <p>
                  <a href={contact.phoneHref} aria-label={`Call ${contact.phone}`}>
                    {contact.phone}
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <a
                    href={contact.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${contact.website}`}
                  >
                    {contact.website}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright-site">© {currentYear} Duy Tan University. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

CustomFooter.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      external: PropTypes.bool,
    })
  ),
  contactInfo: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    phoneHref: PropTypes.string,
    website: PropTypes.string,
    websiteHref: PropTypes.string,
  }),
};

CustomFooter.defaultProps = {
  links: null,
  contactInfo: null,
};

export default CustomFooter;
