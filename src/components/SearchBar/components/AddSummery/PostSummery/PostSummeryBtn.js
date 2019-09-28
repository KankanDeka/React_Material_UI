import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import PostSummery  from './PostSummery';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  filterButton: {
    marginLeft: 'auto'
  },
  filterIcon: {
    marginRight: theme.spacing(1)
  }
}));

const PostSummeryBtn = props => {
  const { onFilter, className, ...rest } = props;

  const classes = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item>
        <Button
          className={classes.filterButton}
          color="primary"
          onClick={handleFilterOpen}
          size="small"
          variant="outlined"
        >
          Add Post Summery
        </Button>{' '}
      </Grid>{' '}
      <PostSummery
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
      />{' '}
    </Grid>
  );
};

PostSummeryBtn.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func
};

export default PostSummeryBtn;
