import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Checkout from "./Checkout/Checkout";
import OrderForm from "./OrderForm/OrderForm";
import Menu from "./Menu/Menu";

import LogIn from "./LogIn/LogIn";
import AdminPage from "./AdminPage/AdminPage";

function App() {
  const dispatch = useDispatch();

  async function fetchMenu() {
    try {
      const result = await axios.get("/api/pizza");
      dispatch({ type: "SET_MENU", payload: result.data });
    } catch (err) {
      console.error(err);
    }
  }
  async function fetchOrder() {
    try {
      const result = await axios.get("/api/order");
      dispatch({ type: "SET_ORDERS", payload: result.data });
    } catch (err) {
      console.error(err);
    }
  }
  async function fetchLineItem() {
    try {
      const result = await axios.get("/api/item");
      dispatch({ type: "SET_LINE_ITEM", payload: result.data });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMenu();
    fetchOrder();
    fetchLineItem();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>
      <div className="body">
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/order-details">Orders</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
            </ul>
          </nav>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/order-details" exact>
            <OrderForm />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/admin" exact>
            <AdminPage />
          </Route>
          <LogIn fetchOrder={fetchOrder} />
        </Router>
      </div>
    </div>
  );
}

export default App;
