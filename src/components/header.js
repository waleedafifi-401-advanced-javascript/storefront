import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography  } from '@material-ui/core';

export default () => (
    <>
        <CssBaseline />
        <AppBar position="static" elevation={0} className="MuiAppBar-root">
            <Toolbar className="">
                <Grid container justify="space-between" alignItems="center" >
                    <Typography variant="h4">Storefront</Typography>
                    <Typography variant="h6">Cart (1)</Typography>
                </Grid>
            </Toolbar>
        </AppBar>
    </>
)