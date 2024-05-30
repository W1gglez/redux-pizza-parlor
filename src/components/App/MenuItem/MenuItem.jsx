import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import ImageIcon from '@mui/icons-material/Image';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import { Grid } from '@mui/joy';
import { useSelector } from 'react-redux';

export default function MenuItem({ pizza }) {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({ type: 'ADD_PIZZA', payload: { ...pizza, quantity: 1 } });
  };

  const removeFromCart = () => {
    dispatch({ type: 'REMOVE_PIZZA', payload: { id: pizza.id } });
  };

  useEffect(() => {
    for (const item of cart) {
      if (item.name === pizza.name) {
        setToggle(true);
      }
    }
  }, []);

  return (
    <Grid xs='auto'>
      <Card
        component='li'
        sx={{ width: 300, flexGrow: 1, mb: 2 }}
      >
        <CardOverflow>
          <AspectRatio>
            {!pizza.image_path ? (
              <div>
                <ImageIcon sx={{ fontSize: '4rem', opacity: 0.2 }} />
              </div>
            ) : (
              <img src={pizza.image_path} />
            )}
          </AspectRatio>
        </CardOverflow>
        <CardOverflow>
          <Typography
            level='title-lg'
            sx={{ textAlign: 'left', mb: 1 }}
          >
            {pizza.name}
          </Typography>
          <Typography
            level='body-sm'
            sx={{ textAlign: 'left', mb: 1 }}
          >
            {pizza.description}
          </Typography>
          <Typography
            sx={{ textAlign: 'right', fontSize: '18px', fontWeight: 'bolder' }}
          >
            ${pizza.price}
          </Typography>
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
