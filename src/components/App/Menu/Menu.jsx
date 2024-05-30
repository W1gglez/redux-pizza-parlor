import { useSelector } from 'react-redux';
import Grid from '@mui/joy/Grid';
import MenuItem from '../MenuItem/MenuItem';
import Button from '@mui/joy/Button';
import { useHistory } from 'react-router-dom';
import LogIn from '../LogIn/LogIn';

export default function Menu() {
  const menu = useSelector((store) => store.menu);
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  let total = 0;
  for (const pizza of cart) {
    total += Number(pizza.price);
  }

  return (
    <>
      <LogIn />
      <h3 className='subtotal'>Subotal: ${total.toFixed(2)} </h3>
      <h2>Step 1: Select Your Pizza</h2>
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
      <Button
        sx={{ alignItems: 'right' }}
        onClick={() => history.push('/order-details')}
      >
        NEXT
      </Button>
    </>
  );
}
