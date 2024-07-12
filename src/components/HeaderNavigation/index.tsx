import React, { useContext } from 'react';
import { DateContext, monthArray } from '../../App';
import { MonthsName } from '../../types/MonthsNameEnum';

const HeaderNavigation = () => {
  const { currentMonth, currentYear, month, year, setMonth, setYear } = useContext(DateContext);

  const onClickBack = () => {
    const currentMonthIndex = monthArray.indexOf(month);
    if (currentMonthIndex > 0) {
      setMonth(monthArray[currentMonthIndex - 1] as MonthsName);
    } else {
      setMonth(monthArray[monthArray.length - 1] as MonthsName);
      setYear(year - 1);
    }
  };

  const onClickNext = () => {
    const currentMonthIndex = monthArray.indexOf(month);
    if (currentMonthIndex < monthArray.length - 1) {
      setMonth(monthArray[currentMonthIndex + 1] as MonthsName);
    } else {
      setMonth(monthArray[0] as MonthsName);
      setYear(year + 1);
    }
  };

  const onClickToday = () => {
    setMonth(currentMonth);
    setYear(currentYear);
  };

  return (
    <nav className="header__navigation">
      <button onClick={onClickToday}>Today</button>
      <button onClick={onClickBack}>Back</button>
      <button onClick={onClickNext}>Next</button>
    </nav>
  );
};

export default HeaderNavigation;
