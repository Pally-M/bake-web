import React from "react";
import Logo from "../Assets/logoimage.jpg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
         <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <a href="/">Home</a>
          <a href="./About">About</a>
          <a href="./Work">Menu</a>
          <a href="./Contact">Contact</a>
          <a href="./Testimonials">Testimonials</a>
          <a href="./Work">Work</a>
        </div>
        <address className="footer-section-columns">
          <span>+27 11 021 3456</span>
          <span>info@sweetdelightsbakery.co.za</span>
          <span>orders@sweetdelightsbakery.co.za</span>
          <span>support@sweetdelightsbakery.co.za</span>
        </address>
        <div className="footer-section-columns">
          <span>FAQs</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;