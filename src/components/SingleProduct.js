import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function SingleProduct(props) {
    return (
        <Grid item className='single-product'>
        <Card>
            <CardMedia
            className='card-image'
            image={props.img}
            title={props.name}
            />
            <CardContent>
            <Typography align='center' variant='h5' component='h2'>
                {props.name}
            </Typography>
            <Typography align='left' color='textSecondary' component='span'>
                Stock: {props.stock}
            </Typography>
            <Typography align='right' color='textSecondary' component='span'>
                {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                }).format(props.price)}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size='small' disabled={props.processing} onClick={props.add}>
                Add To Cart
            </Button>
            <Button
                size='small'
                component={Link}
                to={`/products/${props.productID}`}
            >
                Learn More
            </Button>
            </CardActions>
        </Card>
        </Grid>
    );
}

export default SingleProduct;
