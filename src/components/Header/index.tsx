import { useContext, useEffect } from 'react';
import { DateContext } from '../../App';
import './header.scss';
import HeaderNavigation from '../HeaderNavigation';

const Header = () => {
  const { month, year, setDays } = useContext(DateContext);

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

  return (
    <div className="header">
      <HeaderNavigation />
      <p>
        {month} {year}
      </p>
      <nav className="header__options">
        <button>Day</button>
        <button>Agenda</button>
        <button>Work week</button>
        <button>Month</button>
      </nav>
    </div>
  );
};

export default Header;
