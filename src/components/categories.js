import React from 'react';
import { connect } from 'react-redux';

import { changeActiveCategory } from '../store/categories';

import {Box, ButtonGroup, Button, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

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
    const classes = useStyles();

  return (
    <React.Fragment>
        <CssBaseline />
        <Box>
            <h2 className={classes.browseCategories}>Browse our Categories</h2>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                {props.categories.map(category => (
                    <Button key={category.name} onClick={() => props.changeActiveCategory(category.name)}>
                        {props.active === category.name}
                            {category.displayName}
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    </React.Fragment>
  )
}

const mapStateToProps = store => ({
  categories: store.category.categories,
  active: store.category.activeCategory,
})

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
