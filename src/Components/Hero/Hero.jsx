import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Hero.css";

function Hero() {

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


  const slideimg = [
    {
      isActive: true,
      imageName: './src/external_folder/jkimg/rann_of_kutch.avif',
      title: 'KATCH',
      subTitle: 'GUJARAT'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/Kanyakumari.jpg',
      title: 'KANYAKUMARI',
      subTitle: 'TAMIL-NADU'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/Darjeeling.jpeg',
      title: 'DARJEELING',
      subTitle: 'WEST BENGAL'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/Leh-Ladakh.webp',
      title: 'LEH-LADAKH',
      subTitle: 'JAMMU-KASHMIR'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/4-Dham/Dwarka.jpeg',
      title: 'DWARKA',
      subTitle: 'GUJARAT'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/4-Dham/Rameshwaram.jpg',
      title: 'RAMESHWARAM',
      subTitle: 'TAMIL-NADU'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/4-Dham/Jagannathpuri.jpg',
      title: 'JAGANNATHPURI',
      subTitle: 'ODISHA'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/4-Dham/Badrinath.jpg',
      title: 'BADRINATH',
      subTitle: 'UTTARAKHAND'
    },
    {
      isActive: false,
      imageName: './src/external_folder/jkimg/4-Dham/Kedarnath.jpeg',
      title: 'KEDARNATH',
      subTitle: 'UTTARAKHAND'
    }
  ];

  return (
    <>
      <div className="maincontainer transition_hide">
        <div className="maincontant">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              {slideimg.map((slideimg, slide) => (
                <div className={`carousel-item ${slide === 0 ? 'active' : ''}`} key={slide}>
                  <img src={`${slideimg.imageName}`} className="img_contant" alt="" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{slideimg.title}</h5>
                    <p>{slideimg.subTitle}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev carousel-dark" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next carousel-dark" type="button" data-bs-target="#carouselExampleFade"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )

}

export default Hero