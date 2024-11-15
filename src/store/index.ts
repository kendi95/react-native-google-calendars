import { create } from 'zustand';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import { MenuItem } from '../types/menu';
import { AppStore } from '../types/app-store';

import { initialApp } from './initial-app';
import { CalendarStore } from '../types/calendar-store';

import { 
  month, 
  currentMonthLabel, 
  todayLabel, 
  currentDate, 
  currentDayWeek, 
  currentMonth, 
  monthIndex,
  currentDateInDayJs
} from '../utils/generateCalendar';
import { generateDate } from '../utils/generateDate';
import { Dates } from '@/types/calendar';

dayjs.locale('pt-br');

export const useAppStore = create<AppStore>((set, get) => ({
  app: {
    ...initialApp
  },
  handlers: {
    selectMenuItem: (item: MenuItem) => {
      set((state) => {
        return {
          app: {
            ...state.app,
            selectedItem: item
          }
        }
      })
    }
  }
}))

export const useCalendarStore = create<CalendarStore>((set, get) => ({
  calendar: {
    weekDays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    sortWeekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    monthsLabel: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    sortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    months: month,
    todayLabel: String(todayLabel),
    monthIndex,
    currentDateInDayJs,
  },
  selectedDate: null,
  currentMonthLabel, 
  currentDate,
  currentDayWeek,
  currentMonth,
  handlers: {
    onSelectDate: (date: Date | null) => {
      set({ selectedDate: date });
    },
    onChangeMonthLabel:  (monthLabel: string) => {
      set({
        currentMonthLabel:  monthLabel
      });
    },
    setMonthIndex:  (monthIndex: number) => {
      const { calendar } = get();
      set({
        calendar: {
          ...calendar,
          monthIndex
        }
      })
    },
    handleIncreaseMonth: () => {
      set({
        calendar: {
          ...get().calendar,
          currentDateInDayJs: get().calendar.currentDateInDayJs.add(1, 'month'),
        }
      })

      // const { monthIndex } = get().calendar;

      // if (get().calendar.months[monthIndex].month === get().calendar.currentDateInDayJs.month()) {
      //   return;
      // }

      const addedMonth = get().calendar.currentDateInDayJs.month() + 1;
      const year = get().calendar.currentDateInDayJs.year();
      const weekDays = get().calendar.weekDays;
      const sortWeekDays = get().calendar.sortWeekDays;
      const months = get().calendar.monthsLabel;
      const weekIndex = get().calendar.currentDateInDayJs.day();

      let calendarDate = [] as Dates[];

      const date = generateDate({ month: addedMonth, year });

      date.forEach(({ date, currentMonth }) => {
        calendarDate.push({
          labelDate: date.format('DD'),
          date: date.toDate(),
          weekDay: weekDays[weekIndex],
          sortWeekDay: sortWeekDays[weekIndex],
          formattedDate: date.format('YYYY-MM-DD'),
          currentMonth,
          year: date.year()
        });
      })

      set({
        calendar: {
          ...get().calendar,
          months: [
            ...get().calendar.months,
            {
              month: addedMonth,
              monthLabel: months[addedMonth],
              monthYear: `${months[addedMonth]} - ${year}`,
              dates: calendarDate
            }
          ]
        }
      })

      // arrayMonth.push({
      //   month: addedMonth,
      //   monthLabel: months[addedMonth],
      //   monthYear: `${months[addedMonth]} - ${year}`,
      //   dates: calendarDate
      // })
    },
    handleDecreaseMonth: () => {}
  }
}))