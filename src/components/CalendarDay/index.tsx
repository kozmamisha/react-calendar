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

  const isCurrentMonth = date.isCurrentMonth && month === currentMonth && year === currentYear;
  const isCurrentDay = date.day === currentDay && isCurrentMonth;

  const handleDayClick = (day: number) => {
    if (date.isPrevMonth || date.isNextMonth) {
      return;
    }
    if (text) {
      let userUpdatedInput = prompt('Write new task:');
      userUpdatedInput && setText(userUpdatedInput);
    } else {
      const userInput = prompt(`${day} ${month} ${year}. Create your task:`);
      userInput && setText(userInput);
    }
  };

  const showFullTask = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    alert(text);
  };

  const onDeleteTask = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    let answer = window.confirm('Are you sure you want delete task?');
    if (answer) {
      setText('');
    }
  };

  return (
    <div
      className={`day ${date.isPrevMonth || date.isNextMonth ? 'prev-next-month' : ''} ${
        isCurrentDay ? 'current-day' : ''
      }`}
      onClick={() => handleDayClick(date.day)}>
      {date.day}
      {text && isCurrentMonth && (
        <>
          <div onClick={(e) => showFullTask(e)} className="task-text">
            {text}
          </div>
          <button onClick={(e) => onDeleteTask(e)}>X</button>
        </>
      )}
    </div>
  );
};

export default CalendarDay;
