import { Button, Card, CardContent, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import ViewCart from './ViewCart';

const Payments = () => {
  return (
    <Grid container >
      <Grid item lg={8}>
        <Typography variant='h5' p={2}>Payments</Typography>
        <Stack alignItems='center'>
          <FormControl >
            <FormLabel>Payment Type</FormLabel>
            <RadioGroup row >
              <FormControlLabel value="cod" control={<Radio />} label="Cash On Delivery" />
              <FormControlLabel value="cc" control={<Radio />} label="Credit Card" />
            </RadioGroup>
          </FormControl>
          <Card variant='outlined' sx={{ borderRadius: 10, borderColor: 'gray', padding: '20px 5px' }}>
            <CardContent component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '70%' },
              }}
              noValidate
              autoComplete="off">
              <TextField
                required
                id="outlined-required"
                label="Card Number"
                placeholder='Enter your card number'
              />
              <TextField
                required
                id="outlined-required"
                label="Expiry date"
                placeholder='Select Expiry date'
              />
              <TextField
                required
                id="outlined-required"
                label="CVV"
                placeholder='Enter your CVV number'
              />
            </CardContent>
          </Card>
          <Button variant='outlined' sx={{textTransform:'capitalize',my:2}}>COnfirm Payment</Button>
        </Stack>
      </Grid>
      <Grid item lg={3.5}>
        <ViewCart />
      </Grid>
    </Grid>
  );
};

export default Payments;
