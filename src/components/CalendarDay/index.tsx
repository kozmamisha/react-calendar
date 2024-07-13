import React, { useContext } from 'react';
import { DateContext } from '../../App';
import './calendarDay.scss';

type CalendarDayProps = {
  date: {
    day: number;
    isPrevMonth?: boolean;
    isCurrentMonth?: boolean;
    isNextMonth?: boolean;
  };
};

const CalendarDay = ({ date }: CalendarDayProps) => {
  const { currentDay, currentMonth, currentYear, month, year } = useContext(DateContext);

  const isCurrentDay =
    date.day === currentDay &&
    date.isCurrentMonth &&
    month === currentMonth &&
    year === currentYear;

  return (
    <div
      className={`day ${date.isPrevMonth || date.isNextMonth ? 'prev-next-month' : ''} ${
        isCurrentDay ? 'current-day' : ''
      }`}>
      {date.day}
    </div>
  );
};

export default CalendarDay;
