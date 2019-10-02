// eslint-disable-next-line
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Divider,
  Drawer,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import CommentSummeryBtn from './CommentSummery/CommentSummeryBtn';
import PostSummeryBtn from './PostSummery/PostSummeryBtn';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  drawer: {
    width: 420,
    maxWidth: '100%'
  },
  header: {
    padding: theme.spacing(2, 1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(0, 3),
    flexGrow: 1
  },
  contentSection: {
    padding: theme.spacing(2, 0)
  },
  contentSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
    float: 'left',
    padding: '5px',
  },
  contentSectionContent: {},
  formGroup: {
    padding: theme.spacing(2, 0)
  },
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginTop: 0,
    marginBottom: 0
  },
  flexGrow: {
    flexGrow: 1
  },
  addButton: {
    marginLeft: theme.spacing(1)
  },
  tags: {
    marginTop: theme.spacing(1)
  },
  minAmount: {
    marginRight: theme.spacing(3)
  },
  maxAmount: {
    marginLeft: theme.spacing(3)
  },
  radioGroup: {},
  actions: {
    padding: theme.spacing(3),
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const AddSummery = props => {
  const { open, onClose } = props;

  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      classes={{
        paper: classes.drawer
      }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <div className={classes.content}>
        <div className={classes.contentSection}>
          <Divider />
          <div className={classes.contentSectionHeader}>
            <CommentSummeryBtn />
          </div>
          <div className={classes.contentSectionHeader}>
            <PostSummeryBtn />
          </div>

        </div>
      </div>
      <div className={classes.actions}>
        <Button
          fullWidth
          onClick={onClose}
          size="small"
          variant="contained"
        >
          <CloseIcon className={classes.buttonIcon} />
          Close{' '}
        </Button>{' '}
      </div>{' '}
    </Drawer>
  );
};

AddSummery.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default AddSummery;
