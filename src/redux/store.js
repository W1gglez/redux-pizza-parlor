import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const menu = (state = [], action) => {
  if (action.type === 'SET_MENU') {
    return action.payload;
  }
  return state;
};
const cart = (state = [{ name: 'pepperoni', price: 12.99 }], action) => {
  if (action.type === 'ADD_PIZZA') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_PIZZA') {
    const newState = state.filter((pizza) => pizza != action.payload);
    return newState;
  } else if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
};
const info = (
  state = [{ name: 'Adam', address: '733', city: 'Fargo', zip: '58102' }],
  action
) => {
  if (action.type === 'ADD_INFO') {
    return [...state, action.payload];
  } else if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
};

const store = createStore(
  combineReducers({
    cart,
    menu,
    info,
  }),
  applyMiddleware(logger)
);


export default store;
