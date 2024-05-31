import { useSelector } from 'react-redux';
import Grid from '@mui/joy/Grid';
import MenuItem from '../MenuItem/MenuItem';
import Button from '@mui/joy/Button';
import { useHistory } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Menu() {
  const menu = useSelector((store) => store.menu);
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  let subTotal = () => {
    return cart
      .map((pizza) => Number(pizza.price))
      .reduce((sum, count) => sum + count, 0);
  };

  return (
    <>
      <LogIn />
      <h4 className='subtotal'>Subotal: ${subTotal()} </h4>
      <h2 className='my-3'>Step 1: Select Your Pizza</h2>
      <Grid
        container
        spacing={3}
        sx={{ flexGrow: 1 }}
      >
        {menu.map((pizza, i) => (
          <MenuItem
            key={i}
            pizza={pizza}
          />
        ))}
      </Grid>
      <Row>
        <Col className='d-flex justify-content-end'>
          <Button
            sx={{ px: 6 }}
            onClick={() => history.push('/order-details')}
          >
            NEXT
          </Button>
        </Col>
      </Row>
    </>
  );
}
