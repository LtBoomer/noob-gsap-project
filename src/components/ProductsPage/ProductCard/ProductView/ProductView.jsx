import { eventWrapper } from "@testing-library/user-event/dist/utils";
import "./ProductView.scss";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import ratingStar from "../../../../img/Star.png";
import { addToList, increaseCounter } from "../../../../slice/listSlice";
import { setRating } from "../../../../slice/productsSlice";
import { useState } from "react";

const ProductView = (props) => {
  const { setShowList } = props;
  const product = useSelector((state) => state.products.current);
  const dispatch = useDispatch();
  const [localRating, setLocalRating] = useState(product.rating);

  return (
    <div className="product-view-wrapper">
      <div className="product-view-image product-view-child">
        <img src={product.image} />
      </div>
      <div className="product-view-info product-view-child">
        <h1>{product.name}</h1>
        <span>Price : {product.price}</span>
        <div className="star-container">
          {["", "", "", "", ""].map((_, index) => {
            return (
              <img
                src={ratingStar}
                alt="start"
                className={index < localRating ? "light star" : "dark star"}
                key={index}
                onMouseEnter={() => {
                  document.querySelectorAll(".star").forEach((star, order) => {
                    if (order <= index) {
                      star.classList.remove("dark");
                      star.classList.add("light");
                    } else {
                      star.classList.add("dark");
                    }
                  });
                }}
                onMouseLeave={() => {
                  document.querySelectorAll(".star").forEach((star, order) => {
                    if (order <= localRating - 1) {
                      star.classList.remove("dark");
                      star.classList.add("light");
                    } else {
                      star.classList.add("dark");
                    }
                  });
                }}
                onClick={() => {
                  dispatch(
                    setRating({
                      name: product.name,
                      rating: index + 1,
                    })
                  );
                  setLocalRating(index + 1);
                }}
              />
            );
          })}
        </div>
        <p>{product.description}</p>
        <div className="button-container">
          <button
            className="return"
            onClick={() => {
              setShowList(true);
            }}
          >
            Return
          </button>
          <button
            className="add"
            onClick={() => {
              dispatch(increaseCounter());
              dispatch(
                addToList({
                  image: product.image,
                  name: product.name,
                  price: product.price,
                })
              );
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
