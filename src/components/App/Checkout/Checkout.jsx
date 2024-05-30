import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Checkout() {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart);
  const customerInfo = useSelector((store) => store.info);
  let totalValue = 0;

  const customer = customerInfo.length > 0 ? customerInfo[0] : {};

  const checkoutCart = (event) => {
    console.log(
      'Checkout In Process! Details of order:',
      { itemsInCart },
      { customerInfo }
    );

    axios
      .post('/api/order', {
        customer_name: customer.name,
        street_address: customer.address,
        city: customer.city,
        zip: customer.zip,
        type: customer.type,
        total: totalValue,
        pizzas: itemsInCart,
      })
      .then((response) => {})
      .catch((err) => console.error(err));
  };

  for (let i = 0; i < itemsInCart.length; i++) {
    totalValue += itemsInCart[i].price;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>
        <strong>Customer Information</strong>
      </p>

      {customerInfo.length > 0 ? (
        <p>Name: {customer.name}</p>
      ) : (
        <p>No customer information available</p>
      )}
      <p>
        {customer.address} {customer.city} {customer.zip}
      </p>
      <table>
        <thead> Pizzas in Cart </thead>
        <tbody>
          {itemsInCart.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: {totalValue}</h3>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear Cart
      </button>
      <button onClick={() => checkoutCart()}>Checkout</button>
    </div>
  );
}