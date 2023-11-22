import "./ShoppingList.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  removeFromList,
  decreaseCounter,
  deleteList,
} from "../../slice/listSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ShoppingList = (props) => {
  const list = useSelector((state) => state.shoppingList.shoppingList);
  const { setShowShoppingList } = props;
  const dispatch = useDispatch();
  const [thanksMessage, setThanksMessage] = useState(false);
  return (
    <div className="shopping-list-wrapper">
      {list.length === 0 && (
        <div className="poor-mans-cart">
          <p>Oh no, such empty!</p>
        </div>
      )}
      {list.map((element, index) => {
        return (
          <div className="list-item-wrapper" key={index}>
            <img className="list-image" src={element.image} />
            <div className="name-and-price-wrapper">
              <p>{element.name}</p>
              <span>{element.price} euros</span>
            </div>
            <img
              className="trashcan"
              width="28"
              height="28"
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-trash-can-homeware-tanah-basah-glyph-tanah-basah.png"
              alt="external-trash-can-homeware-tanah-basah-glyph-tanah-basah"
              onClick={() => {
                dispatch(removeFromList(index));
                dispatch(decreaseCounter());
              }}
            />
          </div>
        );
      })}
      <button
        className="close"
        onClick={() => {
          setShowShoppingList(false);
        }}
      >
        ✖
      </button>
      {list.length !== 0 && (
        <button
          className="order"
          onClick={() => {
            setThanksMessage(true);
            dispatch(deleteList());
            setTimeout(() => {
              setThanksMessage(false);
            }, 2000);
          }}
        >
          Place order
        </button>
      )}
      {thanksMessage && (
        <div className="thanks-message">
          <p>Your money has been stolen! Thank you!</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
