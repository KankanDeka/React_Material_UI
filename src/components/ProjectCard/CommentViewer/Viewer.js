import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import CommentViewer  from './CommentViewer';

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

const Viewer = props => {
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
          View Comment
        </Button>{' '}
      </Grid>{' '}
      <CommentViewer
        onClose={handleFilterClose}
        onFilter={onFilter}
        open={openFilter}
      />{' '}
    </Grid>
  );
};

Viewer.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func
};

export default Viewer;
