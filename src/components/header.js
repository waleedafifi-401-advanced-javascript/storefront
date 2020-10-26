import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography  } from '@material-ui/core';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" elevation={0} className="MuiAppBar-root">
                <Toolbar className="">
                    <Grid container justify="space-between" alignItems="center" >
                    <Typography variant="h4">Storefront</Typography>
        
                    <Typography variant="h6">Cart ({props.cart.length})</Typography>
                </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
    
const mapStateToProps = store => {
    return {
        cart: store.cart.items,
    }
}
    
export default connect(mapStateToProps)(Header)
// export default () => (
//     <React.Fragment>
//         <CssBaseline />
//         <AppBar position="static" elevation={0} className="MuiAppBar-root">
//             <Toolbar className="">
//                 <Grid container justify="space-between" alignItems="center" >
//                     <Typography variant="h4">Storefront</Typography>
//                     <Typography variant="h6">Cart (1)</Typography>
//                 </Grid>
//             </Toolbar>
//         </AppBar>
//     </React.Fragment>
// )