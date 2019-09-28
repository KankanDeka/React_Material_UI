import React, { } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
  colors,
  IconButton,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import getInitials from 'utils/getInitials';
import { Label } from 'components';
import Viewer from './CommentViewer'

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0
    }
  },
  description: {
    padding: theme.spacing(2, 3, 1, 3)
  },
  tags: {
    padding: theme.spacing(0, 3, 1, 3),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  learnMoreButton: {
    marginLeft: theme.spacing(2)
  },
  likedButton: {
    color: colors.red[600]
  },
  shareButton: {
    marginLeft: theme.spacing(1)
  },
  details: {
    padding: theme.spacing(1, 3)
  }
}));

const ProjectCard = props => {
  const { project, className, ...rest } = props;

  const classes = useStyles();


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Author"
            src={project.author.avatar}
          >
            {getInitials(project.author.name)}
          </Avatar>
        }
        className={classes.header}
        disableTypography
        subheader={
          <Typography variant="body2">
            by{' '}
            <Link
              color="textPrimary"
              component={RouterLink}
              to="/profile/1/timeline"
              variant="h6"
            >
              {project.author.name}
            </Link>{' '}
            | Updated: {moment(project.updated_at).fromNow()}
          </Typography>
        }
        title={
          <Link
            color="textPrimary"
            component={RouterLink}
            to="/projects/1/overview"
            variant="h5"
          >
            {project.title}
          </Link>
        }
      />
      <CardContent className={classes.content}>
        <div className={classes.description}>
          <Typography
            colo="textSecondary"
            variant="subtitle2"
          >
            We're looking for experienced Developers and Product Designers to
            come aboard and help us build succesful businesses through softare.
          </Typography>
        </div>
        <div className={classes.tags}>
          {project.tags.map(tag => (
            <Label
              color={tag.color}
              key={tag.text}
            >
              {tag.text}
            </Label>
          ))}
        </div>

        <div >
          {project.media === 'Facebook' ?

            <div className={classes.details}>
              <Grid
                alignItems="center"
                container
                justify="space-between"
                spacing={3}
              >
                <Grid item>
                  <Typography variant="h5">
                    <Avatar
                      alt="Author"
                      className={classes.likeButton}
                      size="small"
                      src={project.LikeLogo}
                      style={{width: '20px', height: '20px'}}
                    />
                  </Typography>
                  <Typography variant="body2">
                    {project.likeCount} Likes
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Avatar
                      alt="Author"
                      className={classes.likeButton}
                      size="small"
                      src={project.LoveLogo}
                    />
                  </Typography>
                  <Typography variant="body2">{project.LoveCount} Loves </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Avatar
                      alt="Author"
                      className={classes.likeButton}
                      size="small"
                      src={project.HahaLogo}
                    />
                  </Typography>
                  <Typography variant="body2">{project.HahaCount} Ha Ha</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Avatar
                      alt="Author"
                      className={classes.likeButton}
                      size="small"
                      src={project.WowLogo}
                    />
                  </Typography>
                  <Typography variant="body2">{project.WowCount} Wow</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Avatar
                      alt="Author"
                      className={classes.likeButton}
                      size="small"
                      src={project.SadLogo}
                    />
                  </Typography>
                  <Typography variant="body2">{project.SadCount} Sad</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">
                    <Avatar
                      alt="Author"
                      className={classes.likeButton}
                      size="small"
                      src={project.AngryLogo}
                    />
                  </Typography>
                  <Typography variant="body2">{project.AngryCount} Angry</Typography>
                </Grid>
              </Grid>
            </div>
            : null}

        </div>
        <Divider />
        <div className={classes.details}>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">
                <IconButton
                  className={classes.likeButton}
                  size="small"
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2">
                {project.price} Likes
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                <ChatIcon
                  className={classes.ChatIcon}
                  size="small"
                >
                  <FavoriteBorderIcon />
                </ChatIcon>
              </Typography>
              <Typography variant="body2">{project.location} Comment</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                <ChatIcon
                  className={classes.ChatIcon}
                  size="small"
                >
                  <OpenInNewIcon />
                </ChatIcon>
              </Typography>
              <Typography variant="body2">
                <Button
                  className={classes.ChatIcon}
                  size="small"
                >
                  <Viewer />
                </Button>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                <ShareIcon
                  className={classes.shareButton}
                  size="small"
                >
                  <FavoriteBorderIcon />
                </ShareIcon>
              </Typography>
              <Typography variant="body2">{project.type} Share</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5">
                <IconButton
                  className={classes.shareButton}
                  size="small"
                >
                  <OpenInNewIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2">
                <Button
                  className={classes.shareButton}
                  component={RouterLink}
                  size="small"
                  to="facebook.com"
                >
                  Mention Link
                </Button>
              </Typography>
            </Grid>
            
          </Grid>
        </div>
      </CardContent>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
