import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/cart';
import { increaseInventory } from '../store/products';

import { IconButton, Grid } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { makeStyles } from '@material-ui/core/styles'

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


const SimpleCart = props => {
    const cart = props.cart;
    const classes = useStyles();
    
    const removeHandler = name => {
        props.removeFromCart(name);
        props.increaseInventory(name);
    };

    return (
            <Grid className={classes.simpleCart} item xs={4}>
                <Grid container justify="flex-end">

                    <List>
                        {cart.map(item =>
                            <ListItem key={item.name}>
                                <ListItemText primary={item.name} />
                                <IconButton onClick={() => removeHandler(item.name)}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </ListItem>
                        )}
                    </List>
                </Grid>
            </Grid>
    )
}


const mapStateToProps = store => {
    return {
        cart: store.cart.items,
    }
}

const mapDispatchToProps = { removeFromCart, increaseInventory };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);