import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
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
        total: totalValue,
        pizzas: itemsInCart,
      })
      .then((response) => {
        console.log('Order submitted successfully:', response);
      })
      .catch((err) => {
        console.error('Error submitting order:', err);
      });

    dispatch({ type: 'CLEAR_CART' });
    dispatch({ type: 'CLEAR_INFO' });
    history.push('/');
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
              <td>${Number(item.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ${totalValue}</h3>

      <button onClick={checkoutCart}>Checkout</button>
    </div>
  );
}