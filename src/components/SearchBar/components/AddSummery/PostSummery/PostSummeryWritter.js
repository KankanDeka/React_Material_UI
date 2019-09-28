import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

import { RichEditor } from 'components';

const useStyles = makeStyles(() => ({
  root: {}
}));

const PostSummeryWritter = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Post Summery" />
      <CardContent>
        <RichEditor placeholder="Write Post Summery Here..." />
      </CardContent>
    </Card>
  );
};

PostSummeryWritter.propTypes = {
  className: PropTypes.string
};

export default PostSummeryWritter;