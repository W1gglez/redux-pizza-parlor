import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Checkout from './Checkout/Checkout';
import OrderForm from './OrderForm/OrderForm';
import Menu from './Menu/Menu';
import AdminPage from '../AdminPage/AdminPage';
import Container from '@mui/joy/Container';

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
      const result = await axios.get('/api/order');
      dispatch({ type: 'SET_ORDERS', payload: result.data });
    } catch (err) {
      console.error(err);
    }
  }
  console.log(fetchOrder());
  useEffect(() => {
    fetchMenu();
    fetchOrder();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <nav className='navbar'>
          <ul>
            <li>
              <NavLink
                to='/'
                exact
                activeClassName='active'
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to='/order-details'>Customer Info</NavLink>
            </li>
            <li>
              <NavLink
                to='/checkout'
                activeClassName='active'
              >
                Checkout
              </NavLink>
            </li>
          </ul>
        </nav>
        <Container
          sx={{
            mb: 3,
          }}
        >
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
            <AdminPage fetchOrder={fetchOrder} />
          </Route>
        </Container>
      </Router>
    </div>
  );
}

export default App;