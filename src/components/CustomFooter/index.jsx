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
              <div className="d-flex justify-content-start align-items-center mb-2">
                {/* <span style={{ textAlign: "center", fontSize: "13px" }}>Powered by</span> */}
                <a
                  href="https://duytan.edu.vn/"
                  rel="noopener"
                  target="_blank"
                  className="university-logo "
                  aria-label="Duy Tan University"
                >
                  <img src={logoUrl} alt="Duy Tan University" width="80" />
                </a>
                <a
                  href="https://scs.duytan.edu.vn/"
                  rel="noopener"
                  target="_blank"
                  className="cvs-logo ml-3"
                  aria-label="SCS Duy Tan University"
                >
                  <img src="/logo_scs.png" alt="SCS Duy Tan University" width="45" />
                </a>
                <a
                  href="https://cvs.duytan.edu.vn/"
                  rel="noopener"
                  target="_blank"
                  className="cvs-logo ml-3"
                  aria-label="CVS Duy Tan University"
                >
                  <img src="/cvs.png" alt="CVS Duy Tan University" width="45" />
                </a>
              </div>

              <span className="copyright-site" style={{ textAlign: "center", fontSize: "15px" }}>
                © {currentYear} Duy Tan University. All Rights Reserved.
              </span>
            </div>
          </div>
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
