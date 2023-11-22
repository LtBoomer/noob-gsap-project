import "./Products.scss";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "./ProductCard/ProductView/ProductView";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const [showList, setShowList] = useState(true);

  return (
    <div className="products-wrapper">
      {showList && (
        <div className="cards-wrapper">
          {products.map((card, index) => {
            return (
              <ProductCard
                setShowList={setShowList}
                image={card.image}
                name={card.name}
                price={card.price}
                rating={card.rating}
                description={card.description}
                key={index}
              />
            );
          })}
        </div>
      )}
      {!showList && <ProductView setShowList={setShowList} />}
    </div>
  );
};

export default Products;
