import { useState } from "react";
import "./MobileMenu.scss";
import { gsap } from "gsap/gsap-core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ShoppingList from "../../ShoppingList/ShoppingList";

const MobileHeader = () => {
  const navigate = useNavigate();
  console.log("mobile");
  const [menuEnterCondition, setmenuEnterCondition] = useState(false);
  const count = useSelector((state) => state.shoppingList.shoppingListCount);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const MenuEnter = (event) => {
    gsap.to(".popup-menu", {
      x: `${event}`,
      duration: 0.2,
    });
  };

  const MenuAnimation = (modifier, widthModifier) => {
    gsap.to(".menu-line-1", {
      rotation: modifier,
      width: `${widthModifier}%`,
      transformOrigin: "left",
      duration: 0.2,
      left: `${modifier === 45 ? "1px" : "0px"}`,
    });
    gsap.to(".menu-line-2", {
      rotation: `-${modifier}`,
      width: `${1.9 * widthModifier}%`,
      duration: 0.2,
    });
    gsap.to(".menu-line-3", {
      rotation: modifier,
      width: `${widthModifier}%`,
      transformOrigin: "right",
      duration: 0.2,
      right: `${modifier === 45 ? "1px" : "0px"}`,
    });
  };

  return (
    <div className="mobile-layout-wrapper">
      <div className="mobile-nav">
        <p className="nav-title">CLOP</p>
        <div className="navigation-elements-wrapper">
          <div className="shopping-cart-wrapper">
            <img
              className="cart-image"
              width="auto"
              height="100%"
              src="https://img.icons8.com/stickers/48/fast-cart.png"
              alt="fast-cart"
              onClick={() => {
                setShowShoppingList(true);
              }}
            />
            {count !== 0 && <div className="counter">{count}</div>}
            {showShoppingList && (
              <ShoppingList setShowShoppingList={setShowShoppingList} />
            )}
          </div>
          <div
            className="menu-button"
            onClick={() => {
              if (!menuEnterCondition) {
                setmenuEnterCondition(true);
                setTimeout(() => {
                  MenuEnter("-100%");
                  MenuAnimation(45, 70);
                }, 10);
              } else {
                MenuEnter("0");
                setmenuEnterCondition(false);
                MenuAnimation(0, 50);
              }
            }}
          >
            <div className="aesthetic menu-line-1"></div>
            <div className="aesthetic menu-line-2"></div>
            <div className="aesthetic menu-line-3"></div>
          </div>
        </div>
      </div>
      {menuEnterCondition && (
        <div className="popup-wrapper">
          <div className="popup-menu">
            <div className="popup-menu-text-wrapper">
              <p
                className="navbar-element"
                onClick={() => {
                  MenuEnter("0");
                  MenuAnimation(0, 50);
                  setTimeout(() => {
                    navigate("/");
                    setmenuEnterCondition(false);
                  }, 250);
                }}
              >
                Home
              </p>
              <p
                className="navbar-element"
                onClick={() => {
                  MenuEnter("0");
                  MenuAnimation(0, 50);
                  setTimeout(() => {
                    navigate("/gallery");
                    setmenuEnterCondition(false);
                  }, 250);
                }}
              >
                Gallery
              </p>
              <p
                className="navbar-element"
                onClick={() => {
                  MenuEnter("0");
                  MenuAnimation(0, 50);
                  setTimeout(() => {
                    navigate("/product");
                    setmenuEnterCondition(false);
                  }, 250);
                }}
              >
                Products
              </p>
              <p
                className="navbar-element"
                onClick={() => {
                  MenuEnter("0");
                  MenuAnimation(0, 50);
                  setTimeout(() => {
                    navigate("/contact");
                    setmenuEnterCondition(false);
                  }, 250);
                }}
              >
                Contact
              </p>
            </div>
            <div className="popup-menu-logos">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/facebook--v1.png"
                alt="facebook--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/tiktok--v1.png"
                alt="tiktok--v1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
