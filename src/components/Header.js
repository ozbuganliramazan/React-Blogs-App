import React from "react";

import "../assets/css/header.css";
import logo from "../assets/images/logo.png";

import { useSelector,useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";
import { Link } from "react-router-dom";

const Header = () => {
  const { loginState } = useSelector((state) => state);
  const dispatch=useDispatch()
  return (
    <header>
      <div id="hamburgerMenuBtn" className="menuIconContainer">
        <span>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <div className="logoContainer">
        <img src={logo} alt="" />
      </div>
      <nav id="navBar">
        <ul>
          <li>
            <Link to={"/"}>Anasayfa</Link>
          </li>
          <li>
            <a href="./html/about.html">Hakkımda</a>
          </li>
          <li>
            <a href="#">Tüm Yazılar</a>
          </li>
          {!loginState.success ? (
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to={"/admin"}>Admin Panel</Link>
              </li>
              <li>
                <button onClick={()=>{
                    dispatch({type:actionTypes.loginActions.LOGOUT})

                }} className="btn btn-sm btn-secondary">
                  {loginState.user.username} - logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;