import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentCategory, getCategories } from '../store/categories-slice';

import {Box, CircularProgress, ButtonGroup, Button, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  browseCategories: {
    padding: 4,
    margin: 4,
  },
}));

const Categories = props => {
  const { getCategories, setCurrentCategory, categories } = props;

  const classes = useStyles();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <React.Fragment>
        <CssBaseline />
        <Box>
            <h2 className={classes.browseCategories}>Browse our Categories</h2>
              <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                {console.log(props)}
                {categories.map(category => (
                    <Button key={category.name} onClick={() => setCurrentCategory(category.name)}>
                        {/* {props.active === category.name} */}
                        {category.displayName || category.name}
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    </React.Fragment>
  )
}

const mapStateToProps = store => ({
  categories: store.categories.categories,
})

const mapDispatchToProps = {
  setCurrentCategory,
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
