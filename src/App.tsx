import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Calendar from './components/Calendar';

export enum monthsName {
  JAN = 'January',
  FEB = 'February',
  MAR = 'March',
  APR = 'April',
  MAY = 'May',
  JUN = 'June',
  JUL = 'July',
  AUG = 'August',
  SEP = 'September',
  OCT = 'October',
  NOV = 'November',
  DEC = 'December',
}

const monthArray = Object.values(monthsName);

function App() {
  const currentDate = new Date();
  const currentMonth = monthArray[currentDate.getMonth()] as monthsName;
  const currentYear = currentDate.getFullYear();

  const [month, setMonth] = useState<monthsName>(currentMonth);
  const [year, setYear] = useState<number>(currentYear);
  const [days, setDays] = useState<number>(0);

  useEffect(() => {
    handleCalculate();
  }, [month, year]);

  const handleCalculate = () => {
    const numberOfDays = getDaysInMonth(month, year);
    setDays(numberOfDays);
  };

  const getDaysInMonth = (monthName: string, year: number): number => {
    const monthNumber = new Date(Date.parse(`${monthName} 1, ${year}`)).getMonth() + 1;
    return new Date(year, monthNumber, 0).getDate();
  };

  const onClickBack = () => {
    const currentMonthIndex = monthArray.indexOf(month);
    if (currentMonthIndex > 0) {
      setMonth(monthArray[currentMonthIndex - 1] as monthsName);
    } else {
      setMonth(monthArray[monthArray.length - 1] as monthsName);
      setYear(year - 1);
    }
  };

  const onClickNext = () => {
    const currentMonthIndex = monthArray.indexOf(month);
    if (currentMonthIndex < monthArray.length - 1) {
      setMonth(monthArray[currentMonthIndex + 1] as monthsName);
    } else {
      setMonth(monthArray[0] as monthsName);
      setYear(year + 1);
    } 
  };

  const onClickToday = () => {
    setMonth(currentMonth);
    setYear(currentYear);
  };

  return (
    <div className="App">
      <Header
        onClickBack={() => onClickBack()}
        onClickNext={() => onClickNext()}
        onClickToday={() => onClickToday()}
        month={month}
        year={year}
      />
      <Calendar days={days} />
    </div>
  );
}

export default App;
