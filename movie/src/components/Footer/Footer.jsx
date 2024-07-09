import React from 'react'
import Footer_logo from "../../../src/Assets/Img/Footer_logo.png"
import './Footer.css'
import whatsapp from "../../../src/Assets/Img/whatsapp_icon.png"
import insta_logo from "../../../src/Assets/Img/instagram_icon.png"
import pintrest from "../../../src/Assets/Img/pintester_icon.png"
const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-logo">
            <img src={Footer_logo} alt="" style={{width:"50%"}}/>
            <p>RateMyshow</p>
        </div>

        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>

        <div className="footer-socials">
            <div className="footer-socials-icons">
                <div className="footer-icon-container">
                    <img src={insta_logo} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintrest} alt="" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer