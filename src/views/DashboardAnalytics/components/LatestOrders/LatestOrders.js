import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  colors
} from '@material-ui/core';


import axios from 'utils/axios';
import { Label} from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 650,
  },
  progressContainer: {
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  arrowForwardIcon: {
    marginLeft: theme.spacing(1)
  }
}));

const labelColors = {
  complete: colors.green[600],
  pending: colors.orange[600],
  rejected: colors.red[600]
};

const LatestOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchOrders = () => {
      axios.get('/api/dashboard/latest-orders').then(response => {
        if (mounted) {
          setOrders(response.data.orders);
        }
      });
    };

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Overall Statistics"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar options={{ suppressScrollY: true }}>
          <div className={classes.inner}>
            {orders && (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>% Change from yesterday</TableCell>
                    <TableCell>Change in numbers</TableCell>
                    <TableCell>Remarks/Analysis/Traction </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(order => (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell>{order.ref}</TableCell>
                      <TableCell>{order.customer.name}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell className={classes.totalCell}>
                        {order.currency} {order.value}
                      </TableCell>
                      <TableCell>
                        <Label
                          color={labelColors[order.status]}
                          variant="outlined"
                        >
                          {order.status}
                        </Label>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
