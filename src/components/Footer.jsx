import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CORVANE. All Rights Reserved.</p>
      <div className="socials">
        <a href="https://www.etsy.com/shop/CorvaneGame" target="_blank" rel="noreferrer">Etsy</a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
      </div>
    </footer>
  );
};

export default Footer;
