import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        btn: {
            margin: 'auto',
            display: 'block'
        },
        container: {
            margin: '0px'
        }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const CheckoutForm = (props) => {
    const classes = useStyles();
  const [ordered, setOrdered] = useState(false);

  return (
    <>
        <Grid className={classes.container} container spacing={4}>
            <Grid container item spacing={3} xs={12} md={6}>
            <Grid item xs={12}>
                <Typography variant='h6'>Payment details</Typography>
            </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='cardNumber'
                    label='Card number'
                    fullWidth
                    autoComplete='cc-number'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='expDate'
                    label='Expiry date'
                    fullWidth
                    autoComplete='cc-exp'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='cvv'
                    label='CVV'
                    fullWidth
                    autoComplete='cc-csc'
                    />
                </Grid>
            </Grid>
            <Grid container item spacing={3} xs={12} md={6}>
                <Grid item xs={12}>
                    <Typography variant='h6'>Billing Address</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='fullName'
                    name='fullName'
                    label='Full name'
                    fullWidth
                    autoComplete='full-name'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='address1'
                    name='address1'
                    label='Address line 1'
                    fullWidth
                    autoComplete='shipping address-line1'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='city'
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='shipping address-level2'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id='state'
                    name='state'
                    label='State'
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id='zip'
                    name='zip'
                    label='Zip / Postal code'
                    fullWidth
                    autoComplete='shipping postal-code'
                    />
                </Grid>

            </Grid>
            <Grid item xs={12} justifyContent= 'center'>
                <Button
                    color='primary'
                    variant='contained'
                    className={classes.btn}
                    onClick={() => setOrdered(true)}>
                    Place My Order
                </Button>
            </Grid>
        </Grid>

        <Snackbar
            open={ordered}
            autoHideDuration={6000}
            onClose={() => setOrdered(false)}
        >
            <Alert onClose={() => setOrdered(false)} severity='success'>
            Your order has been recieved!
            </Alert>
        </Snackbar>
    </>
  );
};

export default CheckoutForm;
