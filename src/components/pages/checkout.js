import React from 'react';
import Paper from '@material-ui/core/Paper';
import CheckoutList from '../CheckoutList';
import CheckoutForm from '../CheckoutForm';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        container: {
            padding: '5rem',
            boxSizing: 'border-box',
          
        },
}));


const Home = () => {

    const classes = useStyles();

  return (
    <>
      <Container maxWidth='md' className={classes.container}>
        <Paper className='checkout'>
          <CheckoutList />
          <CheckoutForm />
        </Paper>
      </Container>
    </>
  );
};

export default Home;
