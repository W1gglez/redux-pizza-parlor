import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import ImageIcon from '@mui/icons-material/Image';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import { Grid } from '@mui/joy';

export default function MenuItem({ pizza }) {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'ADD_PIZZA', payload: { ...pizza, quantity: 1 } });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_PIZZA', payload: { id: pizza.id } });
  };

  return (
    <Grid xs={4}>
      <Card
        component='li'
        sx={{ width: 300, flexGrow: 1 }}
      >
        <CardOverflow>
          <AspectRatio>
            <div>
              <ImageIcon sx={{ fontSize: '4rem', opacity: 0.2 }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <CardOverflow variant='primary'>
          <Typography sx={{ textAlign: 'left' }}>{pizza.name}</Typography>
          <Typography sx={{ textAlign: 'left' }}>
            {pizza.description}
          </Typography>
          <Typography sx={{ textAlign: 'right' }}>{pizza.price}</Typography>
        </CardOverflow>
        <CardOverflow
          variant='soft'
          sx={{ bgcolor: 'background.level1' }}
        >
          <Divider inset='context' />
          <CardContent>
            {toggle ? (
              <Typography
                onClick={() => {
                  removeFromCart();
                  setToggle(!toggle);
                }}
                sx={{ textAlign: 'center' }}
              >
                Remove
              </Typography>
            ) : (
              <Typography
                onClick={() => {
                  addToCart();
                  setToggle(!toggle);
                }}
                sx={{ textAlign: 'center' }}
              >
                Add
              </Typography>
            )}
          </CardContent>
        </CardOverflow>
      </Card>
    </Grid>
  );
}
