import circleSmall from "../../img/circle-small.png";
import circleBig from "../../img/circle-large.png";
import watch from "../../img/watch.png";
import { gsap, Power2 } from "gsap";
import { useEffect } from "react";

import "./HomePage.scss";

const HomePage = () => {
  const circlesAnimations = () => {
    gsap.to(".smol-circle", {
      scale: "1",
      duration: localStorage.getItem("firstAnimation") === "true" ? 2 : 0,
      delay: localStorage.getItem("firstAnimation") === "true" ? 2 : 0,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.to(".big-circle", {
      scale: "1",
      duration: localStorage.getItem("firstAnimation") === "true" ? 2 : 0,
      delay: localStorage.getItem("firstAnimation") === "true" ? 2 : 0,
      ease: "elastic.out(1, 0.3)",
    });
  };
  const mainPhotoAnimation = () => {
    gsap.to(".main-photo", {
      x: "-1400px",
      duration: localStorage.getItem("firstAnimation") === "true" ? 2 : 0,
      delay: localStorage.getItem("firstAnimation") === "true" ? 2.5 : 0,
      ease: "elastic.out(0.6, 0.8)",
    });
  };
  const mainTextAnimation = () => {
    gsap.to(".main-text", {
      x: `${window.innerWidth > 500 ? "250px" : "40px"}`,
      duration: localStorage.getItem("firstAnimation") === "true" ? 2 : 0,
      delay: localStorage.getItem("firstAnimation") === "true" ? 2.5 : 0,
      opacity: 1,
    });
  };

  useEffect(() => {
    circlesAnimations();
    mainPhotoAnimation();
    mainTextAnimation();
    localStorage.setItem("firstAnimation", false);
  }, []);

  return (
    <main>
      <div className="main-wrapper">
        <div className="main-text">
          <div className="main-title">
            <div className="title">
              <h1>LIFESTYLE</h1>
              <div className="format">
                <h1>SMART</h1>
                <h1 className="color-change">WATCH</h1>
              </div>
            </div>
            <div className="subtitle">
              <h3>Technology of the future</h3>
            </div>
          </div>
          <div className="main-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              hendrerit orci in suscipit maximus. Curabitur odio magna, auctor
              in hendrerit eu, bibendum vitae dolor. In interdum tincidunt leo
              sit amet imperdiet.
            </p>
          </div>
          <div className="button">Buy now!</div>
        </div>
        <div className="main-photo">
          <img src={watch} alt="poza" />
        </div>
      </div>

      <img src={circleBig} alt="poza" className="big-circle" />
      <img src={circleSmall} alt="poza" className="smol-circle" />
    </main>
  );
};

export default HomePage;
