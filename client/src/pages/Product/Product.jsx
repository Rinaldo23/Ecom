import React from "react";
import {useState} from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import {useParams} from "react-router-dom";

const Product = () => {
  const id = useParams().id;
  const images = [
    "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?w=1060&t=st=1673963295~exp=1673963895~hmac=7c046619baa5c3bd1e4162c503062056fd9f970b3829ea9f26fe59ef8daa8e84",
    "https://img.freepik.com/free-photo/close-up-man-shopping-with-laptop_23-2149241375.jpg?w=1060&t=st=1673963337~exp=1673963937~hmac=bc370a441e11a77ee3e8d290a866775414248cbe8f9751849aa0f04403413ba3",
  ];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
        <div className="left">
          <div className="images">
            <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
            <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
          </div>
          <div className="mainImg">
            <img src={images[selectedImg]} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>Title</h1>
          <span className="price">$200</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            explicabo et, perspiciatis libero eius obcaecati similique
            consequuntur aliquam laborum. Dolorum neque tempora reprehenderit
            consectetur similique fuga illum odio laudantium magni?
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="item">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
    </div>
  );
};

export default Product;
