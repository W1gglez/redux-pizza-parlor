import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import LogIn from '../LogIn/LogIn';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function OrderForm() {
  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const subtotal = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const [selectedValue, setSelectedValue] = useState('Delivery');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const type = document.querySelector('select');

  console.log(type);

  let sub = 0;
  subtotal.map((price) => (sub += Number(price.price)));

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setNewAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setNewCity(event.target.value);
  };
  const handleZipChange = (event) => {
    setNewZip(event.target.value);
  };

  const goToCheckout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_INFO',

      payload: {
        customer_name: newName,
        street_address: newAddress,
        city: newCity,
        zip: newZip,
        type: selectedValue,
      },
    });
    //Navigate to checkout page
    history.push('/checkout');

    setNewName('');
    setNewAddress('');
    setNewCity('');
    setNewZip('');
  };

  return (
    <>
      <LogIn />
      <h2 className='mt-4'>Step 2: Customer Information</h2>
      <h4 className='m-2'> Please fill out your information</h4>
      <h4 className='subtotal'>Subtotal: ${sub.toFixed(2)} </h4>
      <Form onSubmit={goToCheckout}>
        <Row className='mb-2'>
          <Col sm='8'>
            <Input
              type='text'
              value={newName}
              onChange={handleNameChange}
              placeholder='Name'
              required
            />
          </Col>
          <Col sm='4'>
            <Form.Select
              value={selectedValue}
              onChange={handleChange}
            >
              <option value='Delivery'>Delivery</option>
              <option value='Pickup'>Pickup</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col sm>
            <Input
              type='text'
              value={newAddress}
              onChange={handleAddressChange}
              placeholder='Street Address'
              required
            />
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col sm>
            <Input
              type='text'
              value={newCity}
              onChange={handleCityChange}
              placeholder='City'
              required
            />
          </Col>
          <Col sm>
            <Input
              type='text'
              value={newZip}
              onChange={handleZipChange}
              placeholder='Zip'
              required
            />
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            <Button
              sx={{ px: 6 }}
              type='submit'
            >
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
