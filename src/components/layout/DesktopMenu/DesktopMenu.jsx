import "./DesktopMenuLayout.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ShoppingList from "../../ShoppingList/ShoppingList";
import { useState } from "react";

const DesktopHeader = () => {
  const navigate = useNavigate();
  const count = useSelector((state) => state.shoppingList.shoppingListCount);
  const [showShoppingList, setShowShoppingList] = useState(false);
  console.log("desktop");
  return (
    <header>
      <h1 className="nav-title">CLOP</h1>
      <div className="navbar">
        <p
          className="navbar-element"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className="navbar-element"
          onClick={() => {
            navigate("/gallery");
          }}
        >
          Gallery
        </p>
        <p
          className="navbar-element"
          onClick={() => {
            navigate("/product");
          }}
        >
          Products
        </p>
        <p
          className="navbar-element"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </p>
        <div className="shopping-cart-wrapper">
          <img
            className="cart-image"
            width="60"
            height="60"
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
      </div>
    </header>
  );
};

export default DesktopHeader;
