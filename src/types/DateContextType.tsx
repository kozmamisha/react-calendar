import { MonthsName } from "./MonthsNameEnum";

export type DateContextType = {
  currentDate: Date;
  currentMonth: MonthsName;
  currentYear: number;
  currentDay: number;
  month: MonthsName;
  setMonth: (c: MonthsName) => void;
  year: number;
  setYear: (y: number) => void;
  days: number;
  setDays: (d: number) => void;
};