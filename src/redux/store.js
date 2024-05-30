import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const someReducer = (state = [], action) => {
  return state;
}

const store = createStore(
  combineReducers({
    someReducer, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
