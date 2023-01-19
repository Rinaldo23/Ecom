import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useSelector} from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <div className="item">
          <img
            src={item.img}
            alt=""
          />
          <div className="details">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit</p>
            <div className="price">1 * 200</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$1000</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset"> Reset Cart </span>
    </div>
  );
};

export default Cart;
