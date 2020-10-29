import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Header = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" elevation={0} className="MuiAppBar-root">
                <Toolbar className="">
                    <Grid container justify="space-between" alignItems="center" >
                    <Button 
                        to='/'
                        component={Link}>
                        Storefront
                    </Button>
                    <Button 
                        to='/checkout'
                        component={Link}>
                        Cart ({props.cart.length})
                    </Button>
                </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
    
const mapStateToProps = store => {
    return {
        cart: store.cart.cart,
    }
}
    
export default connect(mapStateToProps)(Header)