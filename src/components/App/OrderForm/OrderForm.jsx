import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function OrderForm() {
  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newZip, setNewZip] = useState('');
  const [checked, setChecked] = useState(false);
  const subtotal = useSelector((store) => store.cart);
  const dispatch = useDispatch();

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

  // add new pitcher to the array. this will move to the pitcher reducer!
  const handlePitcherSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_INFO',
      payload: {
        customer_name: newName,
        customer_address: newAddress,
        customer_city: newCity,
        customer_zip: newZip,
      },
    });
    // spread: give me everything in pitcherList, then add this new thing

    setNewName('');
    setNewAddress('');
    setNewCity('');
    setNewZip('');
    setChecked(false);
  };
  //   const goToCheckout = () => {};
  //   onClick={goToCheckout}
  return (
    <>
      <h1>Customer Information</h1>
      <h2> Please fill out your information</h2>
      <h3 className='subtotal'>Subtotal {sub} </h3>
      <form onSubmit={handlePitcherSubmit}>
        <input
          type='text'
          value={newName}
          onChange={handleNameChange}
          placeholder='Name'
        />
        <input
          type='text'
          value={newAddress}
          onChange={handleAddressChange}
          placeholder='Street Address'
        />
        <input
          type='text'
          value={newCity}
          onChange={handleCityChange}
          placeholder='City'
        />
        <input
          type='text'
          value={newZip}
          onChange={handleZipChange}
          placeholder='Zip'
        />
        <label>
          <input
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
          Delivery?
        </label>
        <button type='submit'>Submit Info</button>
      </form>
      <button>Go to Checkout</button>
    </>
  );
}
