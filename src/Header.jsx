import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon_logo"
        />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_Link">
          <div className="header_option">
            <span className="header-optionOne">Hello Guest</span>
            <span className="header_optionTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/" className="header_Link">
          <div className="header_option">
            <span className="header-optionOne">Returns</span>
            <span className="header-optionTwo">& orders</span>
          </div>
        </Link>

        <Link to="/" className="header_Link">
          <div className="header_option">
            <span className="header-optionOne">Your</span>
            <span className="header-optionTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_Link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
