import { useEffect, useState } from 'react';
import './About.css'

function About() {
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
      <div className="about">
        <div className="about_header transition_hide">
          <h1 className="about_heading"><b>ABOUT JK TOURS & TRAVELS</b></h1>
          <p className="paragraph">
            SINCE :- 2008<br /> Owner Name :- KanaBhai , Owner Son's :- JeetBhai<br />
            Online Management Manager :- JeetBhai <br /><br />
            Hiii , Welcome To JK TOURS & TRAVELS <br /> My Travelling Service 24X7 Hours Booking, Vehicle, <br /> And All
            Service
            Etc...
            Available And All Vehicle<br /> Very Luxuries. AC/Non-AC Vehicle is Also Available.
          </p>
        </div>
        <div className="about_img transition_hide">
          <img src="./src/external_folder/jkimg/India_Travel.jpg" className="about_poster"></img>
        </div>
      </div>
    </>
  )
}

export default About
