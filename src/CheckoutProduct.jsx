import React from "react";
import "./css/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, name, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();
  // console.log(basket);
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_TO_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProductImg"
        src={image}
        alt="checkout Product image"
      />
      <div className="checkoutProduct_info">
        <p>{name}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="removeProduct" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
