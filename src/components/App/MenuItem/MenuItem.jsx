import { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import AspectRatio from '@mui/joy/AspectRatio';
import ImageIcon from '@mui/icons-material/Image';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';

export default function MenuItem({ pizza }) {
  const [toggle, setToggle] = useState(false);
  const cart = useSelector((store) => store.cart);

  async function addToCart() {
    try {
      dispatch();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Card sx={{ gap: 0 }}>
      <CardOverflow>
        <AspectRatio>
          <div>
            <ImageIcon sx={{ fontSize: '4rem', opacity: 0.2 }} />
          </div>
        </AspectRatio>
      </CardOverflow>
      <CardOverflow
        variant='primary'
        sx={{}}
      >
        <Typography sx={{ textAlign: 'left' }}>{pizza.name}</Typography>
        <Typography sx={{ textAlign: 'left' }}>{pizza.description}</Typography>
        <Typography sx={{ textAlign: 'right' }}>{pizza.price}</Typography>
      </CardOverflow>
      <CardOverflow
        variant='soft'
        sx={{ bgcolor: 'background.level1' }}
      >
        <Divider inset='context' />
        <CardContent onClick={() => setToggle(!toggle)}>
          {
            <Typography sx={{ textAlign: 'center' }}>
              {toggle ? 'Remove' : 'Add'}
            </Typography>
          }
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
