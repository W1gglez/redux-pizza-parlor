import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import LogIn from '../LogIn/LogIn';

export default function OrderForm() {
  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const [checked, setChecked] = useState(false);
  const subtotal = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  let type = 'Pickup';

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
  const handleChange = () => {
    setChecked(!checked);
  };

  if (checked === true) {
    type = 'Delivery';
  }

  const goToCheckout = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_INFO',

      payload: {
        customer_name: newName,
        street_address: newAddress,
        city: newCity,
        zip: newZip,
        type: type,
      },
    });
    //Navigate to checkout page
    history.push('/checkout');

    setNewName('');
    setNewAddress('');
    setNewCity('');
    setNewZip('');
    setChecked(false);
  };

  return (
    <>
      <LogIn />
      <h2>Step 2: Customer Information</h2>
      <h4> Please fill out your information</h4>
      <h3 className='subtotal'>Subtotal: ${sub.toFixed(2)} </h3>
      <form onSubmit={goToCheckout}>
        <input
          type='text'
          value={newName}
          onChange={handleNameChange}
          placeholder='Name'
          required
        />
        <input
          type='text'
          value={newAddress}
          onChange={handleAddressChange}
          placeholder='Street Address'
          required
        />
        <input
          type='text'
          value={newCity}
          onChange={handleCityChange}
          placeholder='City'
          required
        />
        <input
          type='text'
          value={newZip}
          onChange={handleZipChange}
          placeholder='Zip'
          required
        />
        <label>
          <input
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
          Delivery
        </label>
        <button>Go to Checkout</button>
      </form>
    </>
  );
}
