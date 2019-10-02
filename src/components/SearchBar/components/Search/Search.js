import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 1),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(0),
    color: theme.palette.icon
  },
  searchInput: {
    flexGrow: 1
  },
  searchButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Search = props => {
  const { onSearch, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Paper
        className={classes.search}
        elevation={1}
      >
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search"
        />
        <Button
          className={classes.searchButton}
          onClick={onSearch}
          size="small"
          variant=""
        >
          <SearchIcon className={classes.searchIcon} />
        </Button>
      </Paper>

    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func
};

export default Search;
