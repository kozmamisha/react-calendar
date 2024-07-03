// src/components/Calendar.js
import './calendar.scss';

export type CalendarProps = {
  days: number;
};

const Calendar = ({ days }: CalendarProps) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const dates = [];
  for (let i = 1; i <= days; i++) {
    dates.push(i);
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
        {dates.flat().map((date, index) => (
          <div key={index} className={`day ${index < 3 || index > 32 ? 'prev-next-month' : ''}`}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
