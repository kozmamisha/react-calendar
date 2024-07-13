import { useContext } from 'react';

import { DateContext, monthArray } from '../../App';
import CalendarDay from '../CalendarDay';

import './calendar.scss';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const { days, month, year } = useContext(DateContext);

  const firstDayOfMonth = new Date(`${month} 1, ${year}`).getDay();

  const currentMonthIndex = monthArray.indexOf(month);
  const prevMonthIndex = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
  const prevMonthYear = currentMonthIndex === 0 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevMonthYear, prevMonthIndex + 1, 0).getDate();

  const dates = [];

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    dates.push({
      day: daysInPrevMonth - i,
      isPrevMonth: true,
    });
  }

  for (let i = 1; i <= days; i++) {
    dates.push({
      day: i,
      isCurrentMonth: true,
    });
  }

  const totalCells = 42;
  const nextMonthDays = totalCells - dates.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    dates.push({
      day: i,
      isNextMonth: true,
    });
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar__day-header">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar__body">
        {dates.map((date, index) => (
          <CalendarDay date={date} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
