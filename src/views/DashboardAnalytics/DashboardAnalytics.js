import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Page } from 'components';
import {
  EarningsSegmentation,
  LatestOrders,
  Header,
} from './components';
import ProjectList from '../ProjectList/ProjectList'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    '& > *': {
      height: '100%'
    }
  },
  header: {
    marginBottom: theme.spacing(3)
  },
}));

const DashboardAnalytics = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Analytics Dashboard"
    >
      <Header className={classes.header} />
      <Grid
        className={classes.container}
        container
        spacing={3}
      >
        <Grid
          item
          lg={8}
          xs={12}
        >
          <LatestOrders />
        </Grid>{' '}
        <Grid
          item
          lg={4}
          xl={3}
          xs={12}
        >
          <EarningsSegmentation />
        </Grid>
        <Grid
          item
          lg={12}
          xl={12}
          xs={12}
        >
          <ProjectList />
        </Grid>

        {/* <Grid item lg={4} xs={12}>
                <CustomerActivity />
              </Grid>
              <Grid item lg={8} xs={12}>
                <MostProfitableProducts />
              </Grid>
              <Grid item lg={4} xs={12}>
                <TopReferrals />
              </Grid> */}{' '}
      </Grid>{' '}
    </Page>
  );
};

export default DashboardAnalytics;
