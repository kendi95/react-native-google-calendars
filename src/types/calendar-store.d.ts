import { Months } from "./calendar";
import { MenuItem } from "./menu"
import { Dayjs } from 'dayjs';

export type CalendarStore = {
  calendar: {
    weekDays: string[];
    sortWeekDays: string[];
    monthsLabel: string[];
    sortMonths: string[];
    months: Months[];
    todayLabel: string;
    monthIndex: number;
    currentDateInDayJs: Dayjs;
  };
  selectedDate: Date | null;
  currentMonthLabel: string;
  currentDate:  string;
  currentDayWeek: string;
  currentMonth: string;
  handlers: {
    onSelectDate: (date: Date | null) => void
    onChangeMonthLabel: (monthLabel: string) => void
    setMonthIndex: (monthIndex: number) => void
    handleIncreaseMonth: () => void
    handleDecreaseMonth: () => void
  }
}