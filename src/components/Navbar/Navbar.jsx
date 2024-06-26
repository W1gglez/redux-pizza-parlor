import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";

export default function Navbar(){
    return(
        <header className="header">
        <nav className="nav container">
          <NavLink to="/" className="nav__logo">
            Navigation Bar
          </NavLink>
   
          <div
            className={"nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/order-details" className="nav__link">
                  Orders
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/checkout"
                  className="nav__link"
                >
                  Checkout
                </NavLink>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <IoClose />
            </div>
          </div>
   
          <div className="nav__toggle" id="nav-toggle">
            <IoMenu />
          </div>
        </nav>
      </header>
    );
}