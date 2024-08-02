import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { products } from './../ServiceData/ProductList';
import CartContext from '../ContextApi/CartContext';
import ViewCart from './ViewCart';

const ShowCard = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Grid container mt={2}>
        <Grid item lg={8}>
          <Grid container spacing={5} justifyContent={'center'}>
            {products.map((item, index) => (
              <Grid item lg={5} md={5} key={index}>
                <Container
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    padding: 2,
                    transition: 'all 0.3s ease',
                    boxShadow: 1,
                    borderRadius: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <Box
                    component='img'
                    src={item.imgUrl}
                    alt={item.name}
                    sx={{
                      display: 'block',
                      maxWidth: '100%',
                      height: '50%'
                    }}
                  />
                  <Typography textTransform='capitalize' variant="h6" sx={{ mt: 1, mb: 0.5 }}>
                    {item.name}
                  </Typography>
                  <Typography color="red" fontWeight={600}>
                    &#x20B9; {item.price}
                  </Typography>
                  <Button
                    onClick={() => addToCart(item)}
                    variant='contained'
                    sx={{
                      bgcolor: 'gray',
                      textTransform: 'capitalize',
                      transition: 'all 0.3s ease', mb: 3,
                      '&:hover': {
                        backgroundColor: 'green',
                      },
                      marginTop: 1,
                    }}
                  >
                    Add To Cart
                  </Button>
                </Container>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item lg={3.5}>
          <ViewCart/>
        </Grid>
      </Grid>
    </>
  )
}

export default ShowCard