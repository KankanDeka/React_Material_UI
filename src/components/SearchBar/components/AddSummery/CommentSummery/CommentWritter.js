import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import { RichEditor } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const CommentWritter = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Comment Summery" />
      <CardContent>
        <RichEditor placeholder="Write Comment Summery Here..." />
      </CardContent>
    </Card>
  );
};

CommentWritter.propTypes = {
  className: PropTypes.string
};

export default CommentWritter;