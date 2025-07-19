import { useEffect, useState } from 'react';
import './Review.css'
import ElfsightWidget_Review from './ElfsightWidget_Review';

function Review() {

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
      <div className="review transition_hide">
        <ElfsightWidget_Review />
      </div>
    </>
  )
}

export default Review