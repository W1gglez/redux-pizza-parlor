// src/store.js
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const menu = (state = [], action) => {
  if (action.type === 'SET_MENU') {
    return action.payload;
  }
  return state;
};

const cart = (state = [], action) => {
  if (action.type === 'ADD_PIZZA') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_PIZZA') {
    const newState = state.filter((pizza) => pizza.id !== action.payload.id);
    return newState;
  } else if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
};

const info = (state = {}, action) => {
  if (action.type === 'ADD_INFO') {
    return action.payload;
  } else if (action.type === 'CLEAR_INFO') {
    return {};
  }
  return state;
};

const orders = (state = { data: [], isLoading: false }, action) => {
  switch (action.type) {
    case 'SET_ORDERS':
      return { ...state, data: action.payload, isLoading: false };
    case 'FETCH_ORDERS_REQUEST':
      return { ...state, isLoading: true };
    default:
      return state;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('progressState', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const store = createStore(
  combineReducers({
    cart,
    menu,
    info,
    orders,
   
  }),
  applyMiddleware(logger)
);


export default store;
