// eslint-disable-next-line
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  // Chip,
  // Collapse,
  // Divider,
  Drawer,
  // FormControlLabel,
  // Radio,
  // RadioGroup,
  // Slider,
  // TextField,
  // Typography
} from '@material-ui/core';
// import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import Todos from './Comments'
// import DeleteIcon from '@material-ui/icons/DeleteOutlined';
// import AddIcon from '@material-ui/icons/Add';

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
    cursor: 'pointer'
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

const CommentViewer = props => {
  const { open, onClose } = props;

  const classes = useStyles();


  return (
    <Drawer
      anchor="right"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant="temporary"
    >
      <div>
        <Todos/>
      </div>
      <div className={classes.header}>
        <Button
          onClick={onClose}
          size="small"
        >
          <CloseIcon className={classes.buttonIcon} />
          Close
        </Button>
      </div>
    </Drawer>
  );
};

CommentViewer.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  onFilter: PropTypes.func,
  open: PropTypes.bool.isRequired
};

export default CommentViewer;
