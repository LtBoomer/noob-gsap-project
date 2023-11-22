import "./GalleryPage.scss";
import { gsap } from "gsap";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Gallery = () => {
  const galleryArray = useSelector((state) => state.gallery.gallery);
  const [previousPhoto, setPreviousPhoto] = useState(0);
  const [firstClick, setFirstClick] = useState(true);

  const photoWheelAnimation = (indexMultiplier) => {
    setFirstClick(false);
    gsap.to(".wrapper-animation", {
      x:
        indexMultiplier >= 0
          ? `-${indexMultiplier * (100 / galleryArray.length)}%`
          : `${100 / galleryArray.length}%`,
      duration: 0.5 * Math.abs(indexMultiplier - previousPhoto),
    });
    setPreviousPhoto(indexMultiplier);
    if (indexMultiplier === galleryArray.length - 2) {
      gsap.to(".wrapper-animation", {
        x: "0%",
        duration: 0,
        delay: 0.5,
      });
      setPreviousPhoto(0);
    }
    if (indexMultiplier === -1) {
      gsap.to(".wrapper-animation", {
        x: `-${(galleryArray.length - 3) * (100 / galleryArray.length)}%`,
        duration: 0,
        delay: 0.5,
      });
      setPreviousPhoto(galleryArray.length - 3);
    }
    setInterval(() => {
      setFirstClick(true);
    }, 650);
  };

  return (
    <div className="gallery-wrapper">
      <div className="auxilliary-image-wrapper">
        <div className="arrows-wrapper">
          <button
            className="arrow-left"
            onClick={() => {
              if (firstClick) {
                photoWheelAnimation(previousPhoto - 1);
              }
            }}
          >{`<`}</button>
          <button
            className="arrow-right"
            onClick={() => {
              if (firstClick) {
                photoWheelAnimation(previousPhoto + 1);
              }
            }}
          >{`>`}</button>
        </div>
        <div className="image-wrapper">
          <div className="wrapper-animation">
            {galleryArray.map((image, index) => {
              return (
                <div key={index}>
                  <img src={image} />
                </div>
              );
            })}
          </div>
          <div className="bulletpoint-wrapper-center">
            <div className="bulletpoint-wrapper">
              {galleryArray.map((_, index) => {
                if (index < galleryArray.length - 2) {
                  return (
                    <div
                      className="bulletpoint"
                      onClick={() => {
                        photoWheelAnimation(index);
                      }}
                      key={index}
                    ></div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
