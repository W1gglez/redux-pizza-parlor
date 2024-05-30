import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'

export default function OrderForm() {
  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const [checked, setChecked] = useState(false);
  const subtotal = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory()
  let type = 'Pickup';

  let sub = 0;
  subtotal.map((price) => (price.price += sub));

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

  // add new pitcher to the array. this will move to the pitcher reducer!
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
    //Navigate to
    history.push('/checkout');
    // spread: give me everything in pitcherList, then add this new thing

    setNewName('');
    setNewAddress('');
    setNewCity('');
    setNewZip('');
    setChecked(false);
  };

  return (
    <>
      <h1>Customer Information</h1>
      <h2> Please fill out your information</h2>
      <h3 className='subtotal'>Subtotal {sub} </h3>
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
