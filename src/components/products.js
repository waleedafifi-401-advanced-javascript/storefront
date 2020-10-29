import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getProducts, addToCart as removeFromStock } from '../store/products-slice.js';
import { addToCart } from '../store/cart-slice.js';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    fullHeight: {
        height: "100%"
    },
    card: {
        margin: '1em',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
    },
    jss8: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'initial'
    },
    jss5: {
        padding: '64px 0px 48px'
    },
    jss7: {
        paddingTop: '64px',
        paddingBottom: '64px'
    }
}));

const Products = props => {

    const classes = useStyles();

    const {
        getProducts,
        addToCart,
        removeFromStock,
        products,
        currentCategory,
    } = props;

    useEffect(() => {
        getProducts();
    }, [getProducts]);
    
    const productList = products.filter(
        (product) => product.category === currentCategory,
    );
    
    return (
        <Container maxWidth="md" component="main">
            <Box className={classes.jss5} textAlign="center">
                <Typography variant="h2" color="textPrimary">
                    {productList.length > 0 ? productList[0].category.toUpperCase() : ''}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                {productList.length > 0 ? 'Category Description Goes Here' : ''}
                </Typography>
            </Box>
            <Grid className={classes.jss7} container spacing={0} direction="row" justify="center"  alignItems="center">
            {productList.map(product => (
                <Grid className={classes.jss8} container item xs={12} sm={6} lg={4} >
                    <Card key={product.name} className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        title={product.name} />
                    <CardContent>
                        <Typography variant="h5" color="textPrimary">
                            {product.name}
                        </Typography>
                        <Typography variant="p" color="textSecondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button style={{ fontSize: '0.8125rem' }} color="primary" onClick={() => {removeFromStock(product); addToCart(product);}}>Add to Cart</Button>
                        <Button size='small' component={Link} to={`/products/${product._id}`}>view details</Button>
                    </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    products: state.products.products,
    processing: state.products.processing,
    currentCategory: state.categories.currentCategory,
});

const mapDispatchToProps = {
    getProducts,
    removeFromStock,
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);