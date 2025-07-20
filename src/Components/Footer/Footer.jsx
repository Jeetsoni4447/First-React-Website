import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import { Link } from "react-router";

function Footer() {

  useEffect(() => {
    const hiddenBoxes = document.querySelectorAll('.transition_hide');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('transition_show');
        } else {
          entry.target.classList.remove('transition_show');
        }
      });
    });

    hiddenBoxes.forEach((box) => observer.observe(box));

    return () => {
      hiddenBoxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <>
      <footer className="footer transition_hide">
        <div className="footerimg">
          <img src="./jklogo.jpeg" alt="" className="img tablet_mobile_show"></img>
          <div className="photo-flip laptop_show">
            <div className="flip-inner">
              <div className="flip-front">
                <img src="./jklogo.jpeg" alt="Front Side" />
              </div>
              <div className="flip-back">
                <img src="./jkgooglelogo.png" alt="Back Side" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerl_link">
          <div className="footertext">
            <h1 className="text_heading"><b>QUICK LINKS</b></h1>
            <Link to="/" className="text" end>
              HOME
            </Link><br />
            <Link to="/packages" className="text" end>
              PACKAGE
            </Link><br />
            <Link to="/contact" className="text" end>
              CONTACT US
            </Link><br />
            <Link to="/payonline" className="text" end>
              PAY ONLINE
            </Link><br />
            <Link to="/forbooking" className="text" end>
              FOR BOOKING
            </Link><br />
            <br />
            <div className="footericon">
              <a href="http://www.youtube.com/@JKTOURS-TRAVEL" target="_blank" className="icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://wa.me/919904803601" rel="me" aria-label="jk_tours&travels WhatsApp Link" target="_blank"
                className="icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/jk_tours_travels_/?igsh=amZpaXpxY2V0ZWNr&utm_source=qr#"
                className="icon" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footerabout">
            <h1 className="text_heading"><b>ABOUT US</b></h1>
            <p>
              HIII ,<br />
              WELCOME TO JK TOURS & TRAVELS <br /> OUR TRAVELLING SERVICES 24X7 HOURS BOOKING, VEHICLE, <br /> AND ALL
              SERVICES
              ETC...
              AVAILABLE AND ALL VEHICLE<br /> VERY LUXURIES. AC/NON-AC VEHICLE IS ALSO AVAILABLE.
            </p>
          </div>
          <div className="footercontact">
            <h1 className="text_heading"><b>CONTACT US</b></h1>
            <a href="https://maps.app.goo.gl/WnkS3Rr1t6QWs9C18" target="_blank" className="text">
              <FontAwesomeIcon icon={faBuilding} />&nbsp;Head Office:<br />
              8, DIWAN CHOWK, DIWAN COMPLEX, JUNAGADH, GUJARAT (INDIA).
            </a>
            <a href="" className="text">
              <li></li>
            </a>
            <li><a href="tel:+91 9904803601" className="text"><FontAwesomeIcon icon={faPhone} />&nbsp;+91 9904803601</a>,
              <a href="tel:+91 8866381429" className="text">+91 8866381429</a></li>
            <a href="mailto:jktourstravels4447@gmail.com" className="text">
              <li><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;JkTours&Travels4447@gmail.com</li>
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer_info transition_hide">
        <div className='footer_info_contant'>CopyRight&copy;&nbsp;JK TOURS & TRAVELS All rights reserved.</div>
        <div className='footer_contact'>DESIGNED AND DEVELOPED BY &nbsp;<a href="https://wa.me/919904803601" rel="me" aria-label="jk_tours&travels WhatsApp Link" target="_blank"
          className="footer_info_btn">JEET</a></div>
      </footer>
    </>
  )
}

export default Footer