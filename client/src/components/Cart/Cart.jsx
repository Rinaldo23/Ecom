import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      <div className="item">
        <img
          src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=1060&t=st=1673963295~exp=1673963895~hmac=7c046619baa5c3bd1e4162c503062056fd9f970b3829ea9f26fe59ef8daa8e84"
          alt=""
        />
        <div className="details">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit 
          </p>
          <div className="price">1 * 200</div>
        </div>
        <DeleteOutlinedIcon className="delete" />
      </div>

      <div className="item">
        <img
          src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=1060&t=st=1673963295~exp=1673963895~hmac=7c046619baa5c3bd1e4162c503062056fd9f970b3829ea9f26fe59ef8daa8e84"
          alt=""
        />
        <div className="details">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor 
          </p>
          <div className="price">1 * 200</div>
        </div>
        <DeleteOutlinedIcon className="delete" />
      </div>

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
