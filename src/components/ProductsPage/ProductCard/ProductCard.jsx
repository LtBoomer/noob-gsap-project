import "./ProductCard.scss";
import ratingStar from "../../../img/Star.png";
import { useDispatch } from "react-redux";
import { setCurrent } from "../../../slice/productsSlice";
import { addToList, increaseCounter } from "../../../slice/listSlice";

const ProductCard = (props) => {
  const { image, name, price, rating, description, setShowList } = props;
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img
        src={image}
        alt=""
        onClick={() => {
          setShowList(false);
          dispatch(setCurrent({ image, name, price, rating, description }));
        }}
      />
      <div className="card-info">
        <h4>Name: {name}</h4>
        <p>Price: {price} euros</p>
        <div className="star-container">
          {["", "", "", "", ""].map((_, index) => {
            return (
              <img
                src={ratingStar}
                alt="start"
                className={index < rating ? "light" : "dark"}
                key={index}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            dispatch(increaseCounter());
            dispatch(addToList({ image, name, price }));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
