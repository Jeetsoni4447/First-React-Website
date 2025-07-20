import { Link } from 'react-router';
import './Nav.css';
import { useEffect, useState } from "react";

function Nav() {

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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>

      {/* header */}

      <header className="header_line transition_hide">
        <p className="help">
          For Spacial-Tour Related Enquiry :-
          <a href="tel:+91 8866381429" className="help_text help_no_1"> +91 8866381429 </a>
          <i>|</i>
          <a href="tel:+91 9904803601" className="help_text help_no_2"> +91 9904803601 </a>
        </p>
      </header>

      {/* navbar */}

      <nav className="nav transition_hide">
        <Link to="/" className="navimg" end><img src="./jklogo.jpg" alt="jktours" /></Link>
        <Link to="/packages" className="navbtn" end>PACKAGE</Link>
        <Link to="/contact" className="navbtn" end>CONTACT</Link>
        <Link to="/payonline" className="navbtn" end>PAY ONLINE</Link>
        <Link to="/forbooking" className="navbtn" end>FOR BOOKING</Link>

        <div className="toggle_btn" onClick={toggleMenu}>
          <div className={`container ${menuOpen ? 'change' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className={`dropdown_menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <Link to="/packages"><li className="mobile_navbtn">PACKAGE</li></Link>
            <Link to="/contact"><li className="mobile_navbtn">CONTACT</li></Link>
            <Link to="/payonline"><li className="mobile_navbtn">PAY ONLINE</li></Link>
            <Link to="/forbooking"><li className="mobile_navbtn">FOR BOOKING</li></Link>
          </ul>
        </div>
      </nav>
    </>

  );
}

export default Nav;
