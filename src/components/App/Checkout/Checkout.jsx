import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Checkout() {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((store) => store.cart);
  const customer = useSelector((store) => store.info);
  let totalValue = 0;

  const checkoutCart = () => {
    console.log(
      'Checkout In Process! Details of order:',
      { itemsInCart },
      { customer }
    );

    axios
      .post('/api/order', {
        ...customer,
        // customer_name: customer.customer_name,
        // street_address: customer.street_address,
        // city: customer.city,
        // zip: customer.zip,
        // type: customer.type,
        total: totalValue,
        pizzas: itemsInCart,
      })
      .then((response) => {
        console.log('Order submitted successfully:', response);
      })
      .catch((err) => {
        console.error('Error submitting order:', err);
      });
  };

  for (let i = 0; i < itemsInCart.length; i++) {
    totalValue += Number(itemsInCart[i].price);
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>
        <strong>Customer Information</strong>
      </p>

      <p>
        Name: {customer.customer_name} address: {customer.street_address}{' '}
        {customer.city} {customer.zip}
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemsInCart.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ${totalValue}</h3>
      <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>
        Clear Cart
      </button>
      <button onClick={checkoutCart}>Checkout</button>
    </div>
  );
}