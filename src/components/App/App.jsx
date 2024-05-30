import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Checkout from './Checkout/Checkout';
import OrderForm from './OrderForm/OrderForm';
import Menu from './Menu/Menu';
import LogIn from './LogIn/LogIn';
import AdminPage from '../AdminPage/AdminPage';


function App() {
  const dispatch = useDispatch();

  async function fetchMenu() {
    try {
      const result = await axios.get('/api/pizza');
      dispatch({ type: 'SET_MENU', payload: result.data });
    } catch (err) {
      console.error(err);
    }
  }
  async function fetchOrder() {
    try {
      const result = await axios.get('/api/orders');
      dispatch({ type: 'SET_ORDERS', payload: result.data });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMenu();
    fetchOrder();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <div className='body'>
        <Router>
          <Route
            path='/'
            exact
          >
            <Menu />
          </Route>
          <Route
            path='/order-details'
            exact
          >
            <OrderForm />
          </Route>
          <Route
            path='/checkout'
            exact
          >
            <Checkout />
          </Route>
          <Route
            path='/admin'
            exact
          >
            <AdminPage/>
          </Route>
         <LogIn/>
        </Router>
      </div>
    </div>
  );
}

export default App;
