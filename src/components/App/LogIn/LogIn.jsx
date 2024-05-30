import './Login.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export default function LogIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // add new pitcher to the array. this will move to the pitcher reducer!
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === 'admin' && password === '123') {
      history.push('/admin');
      setUserName('');
      setPassword('');
    } else history.push('/');
    setUserName('');
    setPassword('');
    // spread: give me everything in pitcherList, then add this new thing
  };

  return (
    <form
      className='loginForm'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={userName}
        onChange={handleUserName}
        placeholder='Username'
      />
      <input
        type='password'
        value={password}
        onChange={handlePassword}
        placeholder='Password'
      />
      <button type='submit'>Log In</button>
    </form>
  );
}
