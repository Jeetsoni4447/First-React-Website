import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Slider from './Slider.jsx'
import './Package.css'

function Package() {

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

  const package_card_1 = [
    {
      title: ' LEH-LADAKH ',
      image: './Leh-Ladakh.webp',
      paragraph_title: '10-Nights / 11-Days',
      paragraph: '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01  Night Kargil 01 Night Srinagar',
    },
    {
      title: ' HIMACHAL ',
      image: './Manali.jpg',
      paragraph_title: '9-Nights / 10-Days',
      paragraph: '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
    },
    {
      title: ' UTTARAKHAND ',
      image: './Mussoorie.jpg',
      paragraph_title: '7-Nights / 8-Days',
      paragraph: 'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
    }
  ];

  const package_card_2 = [
    {
      id: 'pc1',
      title: ' LEH-LADAKH ',
      paragraph_title: '10-Nights / 11-Days',
      paragraph: '01 Night Manali 01 Night Jispa 02 Night Leh 01 Night Nubra 01 Night Leh 01 Night Pangong Lake 01 Night Leh 01  Night Kargil 01 Night Srinagar',
    },
    {
      id: 'pc2',
      title: ' HIMACHAL ',
      paragraph_title: '9-Nights / 10-Days',
      paragraph: '02 Nights Shimla 03 Night Manali 01 Night Dharamshala 02 Night Dalhousie 01 Night Amritsar',
    },
    {
      id: 'pc3',
      title: ' UTTARAKHAND ',
      paragraph_title: '7-Nights / 8-Days',
      paragraph: 'Delhi - Nainital-(2 Nights) Jim Corbett-(2 Nights) Haridwar(1 Nights) Mussoorie(2 Nights) - Delhi',
    }
  ];

  return (
    <>
      {/* LAPTOP-SHOW */}

      <div className="main_package_laptop transition_hide">
        <h2 className="main_package_heading ">PACKAGES</h2>
        <div className="main_package_cards">
          <Slider />
        </div>
      </div>

      {/* TABLET-SHOW */}

      <div className="main_package_tablet transition_hide">
        <h2 className="main_package_heading">PACKAGES</h2>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
          <div className="main_package_cards">
            <div className="carousel-inner">
              {package_card_1.map((package_card_1, card) => (
                <div className={`carousel-item ${card === 0 ? 'active' : ''}`} key={card}>
                  <div className="card text-color">
                    <img src={`${package_card_1.image}`} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                      <h5 className="card-title">{package_card_1.title}</h5>
                      <p className="card-text">{package_card_1.paragraph_title}</p>
                      <p className="card-text">{package_card_1.paragraph}</p>
                      <Link to="/packages" className="text-btn" end>View All Packages</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE-SHOW */}

      <div className="main_package_mobile transition_hide">
        <h2 className="main_package_heading">PACKAGES</h2>
        <div className="main_package_cards">
          {package_card_2.map((pc2, card) => (
            <div key={pc2.id} className="card text-center">
              <div className="card-header">
                {pc2.title}
              </div>
              <div className="card-body">
                <p className="card-text">{pc2.paragraph_title}</p>
                <p className="card-text">{pc2.paragraph}</p>
              </div>
              <div className="card-footer">
                <Link to="/packages" className="text-btn" end>View All Packages</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Package