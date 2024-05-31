import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import Button from '@mui/joy/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from '@mui/joy/Table';

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
      <LogIn />
      <h2 className='my-3'>Step 3: Checkout</h2>

      <div className='customerinfo'>
        <h5 style={{ textAlign: 'right' }}>For {customer.type}</h5>
        <p>{customer.customer_name}</p>
        <p>{customer.street_address} </p>
        <p>
          {customer.city} {customer.zip}
        </p>
      </div>

      <Table
        borderAxis='both'
        color='neutral'
        size='lg'
        stripe='even'
        variant='soft'
        sx={{ my: 2 }}
      >
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
              <td style={{ textAlign: 'right' }}>${Number(item.price)}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5 style={{ textAlign: 'right' }}>
        Total Price: ${totalValue.toFixed(2)}
      </h5>
      <Row>
        <Col className='d-flex justify-content-end'>
          <Button
            sx={{ px: 6 }}
            onClick={checkoutCart}
          >
            Checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
}