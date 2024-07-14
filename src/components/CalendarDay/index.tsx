import React, { useContext, useState } from 'react';
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
  const [text, setText] = useState<string>('');

  const isCurrentDay =
    date.day === currentDay &&
    date.isCurrentMonth &&
    month === currentMonth &&
    year === currentYear;

  const handleDayClick = (day: number) => {
    if (text) {
      alert(text);
    } else {
      const userInput = prompt(`${day} ${month} ${year}. Create your task:`);
      userInput && setText(userInput);
    }
  };

  return (
    <div
      className={`day ${date.isPrevMonth || date.isNextMonth ? 'prev-next-month' : ''} ${
        isCurrentDay ? 'current-day' : ''
      }`}
      onClick={() => handleDayClick(date.day)}>
      {date.day}
      {text && <div className="task-text">{text}</div>}
    </div>
  );
};

export default CalendarDay;
