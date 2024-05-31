import './Login.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Input from '@mui/joy/Input';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Form
      className='loginForm'
      onSubmit={handleSubmit}
    >
      <Row>
        <Col className='p-1'>
          <Input
            type='text'
            value={userName}
            onChange={handleUserName}
            placeholder='Username'
            size='sm'
          />
        </Col>
        <Col className='p-1'>
          <Input
            type='password'
            value={password}
            onChange={handlePassword}
            placeholder='Password'
            size='sm'
          />
        </Col>
        <Col className='p-1 mr-4'>
          <Button
            variant='outline-secondary sm'
            size='sm'
            type='submit'
          >
            Log In
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
