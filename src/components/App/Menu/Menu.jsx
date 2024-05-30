import { useSelector } from 'react-redux';
import Box from '@mui/joy/Box';
import MenuItem from '../MenuItem/MenuItem';

export default function Menu() {
  const menu = useSelector((store) => store.menu);

  return (
    <>
      <h2>Step 1: Select Your Pizza</h2>
      <Box sx={{ component: 'ul', gap: 2 }}>
        {menu.map((pizza, i) => (
          <MenuItem
            key={i}
            pizza={pizza}
          />
        ))}
      </Box>
    </>
  );
}
