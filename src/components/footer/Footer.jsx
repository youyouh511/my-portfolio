import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {new Date().getFullYear()} Youyou Huang, 
          developed with assistance from <strong>GPT 5.1</strong>{" "}
          and inspired by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            DeveloperFolio
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
