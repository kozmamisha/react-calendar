import { createContext, useState, ReactNode } from 'react';
import { MonthsName } from './types/MonthsNameEnum';

import Header from './components/Header';
import Calendar from './components/Calendar';
import { DateContextType } from './types/DateContextType';

type DateProviderProps = {
  children: ReactNode;
};

export const monthArray = Object.values(MonthsName);

const currentDate = new Date();
const currentMonth = monthArray[currentDate.getMonth()] as MonthsName;
const currentYear = currentDate.getFullYear();
const currentDay = currentDate.getDate();

export const DateContext = createContext<DateContextType>({
  currentDate,
  currentMonth,
  currentYear,
  currentDay,
  month: currentMonth,
  setMonth: () => {},
  year: currentYear,
  setYear: () => {},
  days: 0,
  setDays: () => {},
});

export const DateProvider = ({ children }: DateProviderProps) => {
  const [month, setMonth] = useState<MonthsName>(currentMonth);
  const [year, setYear] = useState<number>(currentYear);
  const [days, setDays] = useState<number>(0);

  return (
    <DateContext.Provider
      value={{
        currentDate,
        currentMonth,
        currentYear,
        currentDay,
        month,
        setMonth,
        year,
        setYear,
        days,
        setDays,
      }}>
      {children}
    </DateContext.Provider>
  );
};

function App() {
  return (
    <DateProvider>
      <div className="App">
        <Header />
        <Calendar />
      </div>
    </DateProvider>
  );
}

export default App;
