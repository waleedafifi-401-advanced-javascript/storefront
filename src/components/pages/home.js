import React from 'react';
import Categories from '../categories';
import Products from '../products';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <>
      <Container maxWidth='lg' className='main-content'>
        <Categories />
        <Products />
      </Container>
    </>
  );
};

export default Home;
