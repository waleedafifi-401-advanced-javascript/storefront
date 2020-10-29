import React from 'react';
import { connect } from 'react-redux';

import { IconButton, Grid } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { removeFromCart as restock } from '../store/products-slice.js';
import { removeFromCart } from '../store/cart-slice.js';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            background: '#f5f5f5',
            border: '1px solid #f5f5f5',
            listStyleType: 'none',
            margin: 0,
            padding: '1rem'
        },
    },
    'simpleCart': {
        fontSize: '1.25rem',
        position: 'fixed',
        top: '4.5rem',
        right: '1rem',
        width: '200px',
    }
}));


function SimpleCart(props) {
        const classes = useStyles();

    const {
        removeFromCart,
        restock,
        cart,
    } = props;

    return (
        <Grid className={classes.simpleCart} item xs={4}>
            <Grid container justify="flex-end">
                <List>
                    {cart.map(item =>
                        <ListItem key={item.name}>
                            <ListItemText primary={item.name} />
                            <IconButton onClick={() => { 
                                restock(item); 
                                removeFromCart(item)}}>
                                <HighlightOffIcon />
                            </IconButton>
                        </ListItem>
                    )}
                </List>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    cartCount: state.cart.cartCount,
});

const mapDispatchToProps = {
    removeFromCart,
    restock,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
