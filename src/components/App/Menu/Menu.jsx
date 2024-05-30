import { useSelector } from 'react-redux';
import Box from '@mui/joy/Box';
import MenuItem from '../MenuItem/MenuItem';
import { Button } from '@mui/joy';
import { useHistory } from 'react-router-dom';

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
      <h3>Total: ${total} </h3>
      <h2>Step 1: Select Your Pizza</h2>
      <Box sx={{ component: 'ul', gap: 2 }}>
        {menu.map((pizza, i) => (
          <MenuItem
            key={i}
            pizza={pizza}
          />
        ))}
      </Box>
      <Button onClick={() => history.push('/order-details')}>NEXT</Button>
    </>
  );
}
