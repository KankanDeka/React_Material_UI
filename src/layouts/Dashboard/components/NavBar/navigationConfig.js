/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
// eslint-disable-next-line
import React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';

export default [
  {
    title: '',
    pages: [
      {
        title: 'Dashboard',
        href: '/dashboards',
        icon: DashboardIcon,
      },
      {
        title: 'Mentions',
        href: '/mentions',
        icon: BarChartIcon,
      },
    ]
  }
];
