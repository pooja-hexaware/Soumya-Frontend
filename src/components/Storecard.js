import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/700.css';
import './Home.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRestaurant } from './Restaurant.action';

export default function StoreCard() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.Restaurant.restaurants.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);

  useEffect(() => {

    console.log(restaurants)

  }, [restaurants]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <div style={{backgroundImage: `url('https://th.bing.com/th/id/OIP.KY9fKV5WlaI5x9wAaWE-dQHaFP?w=244&h=180&c=7&r=0&o=5&pid=1.7')`,'background-position': 'center center'}}  className='app-container1'>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {restaurants?.map(data =>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 450 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.store_img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.store_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Location:{data.store_address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">Contact:{data.store_phone}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href='/menucard'>
                    View Menu
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );

}