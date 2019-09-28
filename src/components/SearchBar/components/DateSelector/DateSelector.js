import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import CalendarTodayIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(theme => ({
  root: {},
  dates: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left'
  },
  calendarTodayIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DateSelector = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [startDate, setStartDate] = useState(moment().subtract(7, 'days'));
  const [endDate, setEndDate] = useState(moment());
  const [selectEdge, setSelectEdge] = useState(null);
  const [calendarDate, setCalendarDate] = useState(moment());

  const handleCalendarOpen = edge => {
    setSelectEdge(edge);
  };

  const handleCalendarChange = date => {
    setCalendarDate(date);
  };

  const handleCalendarClose = () => {
    setCalendarDate(moment());
    setSelectEdge(null);
  };

  const handleCalendarAccept = date => {
    setCalendarDate(moment());

    if (selectEdge === 'start') {
      setStartDate(date);

      if (moment(date).isAfter(endDate)) {
        setEndDate(date);
      }
    } else {
      setEndDate(date);

      if (moment(date).isBefore(startDate)) {
        setStartDate(date);
      }
    }

    setSelectEdge(null);
  };

  const open = Boolean(selectEdge);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        justify="space-between"
        spacing={3}
      >
        <Grid
          className={classes.dates}
          item
          lg={6}
          xs={12}
        >
          <ButtonGroup variant="contained">
            <Button onClick={() => handleCalendarOpen('start')}>
              <CalendarTodayIcon className={classes.calendarTodayIcon} />
              {startDate.format('DD MM YYYY')}
            </Button>
            <Button onClick={() => handleCalendarOpen('end')}>
              <CalendarTodayIcon className={classes.calendarTodayIcon} />
              {endDate.format('DD MM YYYY')}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <DatePicker
        maxDate={moment()}
        onAccept={handleCalendarAccept}
        onChange={handleCalendarChange}
        onClose={handleCalendarClose}
        open={open}
        style={{ display: 'none' }} // Temporal fix to hide the input element
        value={calendarDate}
        variant="dialog"
      />
    </div>
  );
};

DateSelector.propTypes = {
  className: PropTypes.string
};

DateSelector.defaultProps = {};

export default DateSelector;