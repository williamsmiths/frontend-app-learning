import React from "react";
import { getConfig } from "@edx/frontend-platform";
import logoHUIT from "../../assets/logo-ct.png";


import "./index.scss";

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="footer-top-grid">

          {/* Cột 1: Branding & Giới thiệu */}
          <div className="footer-col branding-col">
            <div className="logo-wrapper">
              <img src={logoHUIT} alt="HUIT Logo" className="footer-logo" />
            </div>
            <p className="footer-intro-text">
              Trường Đại học Công Thương TP.HCM – HUIT định hướng ứng dụng,
              tiên phong trong đào tạo nguồn nhân lực chất lượng cao, mang đến
              môi trường học tập hiện đại, hệ thống phòng thực hành – thí nghiệm
              chuẩn công nghiệp, cùng nhiều cơ hội thực tập, trải nghiệm doanh nghiệp
              và hội nhập quốc tế.
            </p>
          </div>

          {/* Cột 2: Trợ Giúp */}
          <div className="footer-col links-col">
            <h4 className="footer-title">Trợ Giúp</h4>
            <ul className="footer-links">
              <li><a href="#">Liên Hệ</a></li>
              <li><a href="#">Tin Tức</a></li>
              <li><a href="#">Câu Hỏi Thường Gặp</a></li>
            </ul>
          </div>

          <div className="footer-col info-col">
            <h4 className="footer-title">Thông Tin</h4>
            <div className="contact-details">
              <p><strong>Địa chỉ :</strong> 140 Lê Trọng Tấn, P. Tây Thạnh, TP.HCM</p>
              <p><strong>Điện thoại :</strong> 028 6270 6275 - 096 205 1080</p>
              <p><strong>Email :</strong> tuyensinh@huit.edu.vn</p>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright © {currentYear} - Truong Dai Hoc Cong Thuong Tp. Ho Chi Minh - huit.edu.vn
          </p>
          <button className="scroll-top-btn" onClick={() => window.scrollTo(0, 0)}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;