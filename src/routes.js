/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
// eslint-disable-next-line
import React, { lazy } from 'react';
import DashboardLayout from './layouts/Dashboard';
import DashboardAnalyticsView from './views/DashboardAnalytics';
import DashboardDefaultView from './views/DashboardDefault';


const routes = [
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: DashboardDefaultView
      },
      {
        path: '/mentions',
        exact: true,
        component: DashboardAnalyticsView
      },
      {
        path: '/dashboards',
        exact: true,
        component: DashboardDefaultView
      },
    ]
  }
];

export default routes;
