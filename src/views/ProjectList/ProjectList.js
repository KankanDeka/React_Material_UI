import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Page, SearchBar } from 'components';
import { Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  DateSelector: {
    flexGrow: 1,
    marginTop: theme.spacing(3)
  },
  CommentSummeryBtn: {
    marginRight: 'auto'
  },
  PostSummeryBtn: {
    marginLeft: theme.spacing(1)
  },
  results: {
    marginTop: theme.spacing(6)
  }
}));

const ProjectList = () => {
  const classes = useStyles();

  const handleFilter = () => { };
  const handleSearch = () => { };

  return (
    <Page
      className={classes.root}
      title="Analytics"
    >
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />

      {/* <DateSelector className={classes.DateSelector} />
      <div>
        <CommentSummeryBtn className={classes.CommentSummeryBtn} />
      </div><div>
        <PostSummeryBtn className={classes.PostSummeryBtn} />
      </div> */}
      <div>
        <Results className={classes.results} />
      </div>
    </Page >
  );
};

export default ProjectList;
