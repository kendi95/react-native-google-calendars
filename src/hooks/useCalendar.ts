import dayjs from 'dayjs'
import { useMemo, useState } from 'react';

import { useCalendarStore } from '../store'
import { generateDate } from '../utils/generateDate';
import { Dates, Months } from '../types/calendar';

export function useCalendar() {
  const { calendar, handlers } = useCalendarStore();
  const [monthIndex, setMonthIndex] = useState<number | null>(null);
  const [monthIndexChanged, setMonthIndexChanged] = useState<number | null>(null);
  const [monthChanged,  setMonthChanged] = useState<Months[]>([]);
  
  const today = dayjs();
  const weekIndex = today.day();
  const currentDateDay = today.date();
  
  const currentDayWeek = calendar.sortWeekDays[weekIndex];  

  const months = useMemo(() => {
    // let arrayMonth = [] as Months[];

    // let currentYear = today.year();
    // let currMonth = today.month();

    // // monthChanged[monthIndexChanged].month === 11

    // if (monthChanged.length > 0 && monthIndexChanged) {
    //   if (monthChanged.length - 1 === monthIndexChanged) {
    //     currMonth = today.add(1, 'month').month();

    //     if  (monthChanged[monthIndexChanged].month === 11) {
    //       currentYear = today.add(1, 'year').year();
    //     }

    //     arrayMonth = monthChanged;

    //     const prevCurrMonth = currMonth === 0 ? 11 : currMonth - 1;
    //     const nextCurrMonth = currMonth === 11 ? 0 : currMonth + 1;

    //     for (let i = prevCurrMonth; i <= nextCurrMonth; i++) {
    //       let calendarDate = [] as Dates[];
    
    //       const date = generateDate({ month: i, year: currentYear });
    
    //       date.forEach(({ date, currentMonth }) => {
    //         calendarDate.push({
    //           labelDate: date.format('DD'),
    //           date: date.toDate(),
    //           weekDay: calendar.weekDays[weekIndex],
    //           sortWeekDay: calendar.sortWeekDays[weekIndex],
    //           formattedDate: date.format('YYYY-MM-DD'),
    //           currentMonth,
    //           year: date.year()
    //         });
    //       })

    //       arrayMonth.push({
    //         month: i,
    //         monthLabel: calendar.monthsLabel[i],
    //         monthYear: `${calendar.monthsLabel[i]} - ${currentYear}`,
    //         dates: calendarDate,
    //       })
    //     }
    //   }

    //   if (monthChanged.length - monthChanged.length === monthIndexChanged) {
    //     currMonth = today.subtract(1, 'month').month();

    //     if  (monthChanged[monthIndexChanged].month === 0) {
    //       currentYear = today.subtract(1, 'year').year();
    //     }

    //     const prevCurrMonth = currMonth === 0 ? 11 : currMonth - 1;
    //     const nextCurrMonth = currMonth === 11 ? 0 : currMonth + 1;

    //     for (let i = prevCurrMonth; i <= nextCurrMonth; i++) {
    //       let calendarDate = [] as Dates[];
    
    //       const date = generateDate({ month: i, year: currentYear });
    
    //       date.forEach(({ date, currentMonth }) => {
    //         calendarDate.push({
    //           labelDate: date.format('DD'),
    //           date: date.toDate(),
    //           weekDay: calendar.weekDays[weekIndex],
    //           sortWeekDay: calendar.sortWeekDays[weekIndex],
    //           formattedDate: date.format('YYYY-MM-DD'),
    //           currentMonth,
    //           year: date.year()
    //         });
    //       })
    
    //       arrayMonth.push({
    //         month: i,
    //         monthLabel: calendar.monthsLabel[i],
    //         monthYear: `${calendar.monthsLabel[i]} - ${currentYear}`,
    //         dates: calendarDate,
    //       })
    //     }

    //     monthChanged.forEach((month) => {
    //       arrayMonth.push(month);
    //     })
    //   }
    // }
    
    // const prevCurrMonth = currMonth === 0 ? 11 : currMonth - 1;
    // const nextCurrMonth = currMonth === 11 ? 0 : currMonth + 1;

    // for (let i = prevCurrMonth; i <= nextCurrMonth; i++) {
    //   let calendarDate = [] as Dates[];

    //   const date = generateDate({ month: i, year: currentYear });

    //   date.forEach(({ date, currentMonth }) => {
    //     calendarDate.push({
    //       labelDate: date.format('DD'),
    //       date: date.toDate(),
    //       weekDay: calendar.weekDays[weekIndex],
    //       sortWeekDay: calendar.sortWeekDays[weekIndex],
    //       formattedDate: date.format('YYYY-MM-DD'),
    //       currentMonth,
    //       year: date.year()
    //     });
    //   })

    //   arrayMonth.push({
    //     month: i,
    //     monthLabel: calendar.monthsLabel[i],
    //     monthYear: `${calendar.monthsLabel[i]} - ${currentYear}`,
    //     dates: calendarDate,
    //   })

    //   setMonthIndex(calendar.monthsLabel[i] === calendar.monthsLabel[currMonth] ? i : null)
    // }

    // return arrayMonth;

    // return calendar.months;
  }, []);

  const currentDate = useMemo(() => {
    return dayjs().format('YYYY-MM-DD')
  }, [])

  const currentMonth = useMemo(() => {
    const month = today.format('MMMM');
    const firstLetterUppercase = month.charAt(0).toUpperCase();
    const otherLetters = month.slice(1)

    return `${firstLetterUppercase}${otherLetters}`
  }, [today])

  function handleSelectDate(date: Date | null) {
    handlers.onSelectDate(date);
  }

  console.log('show =>', JSON.stringify(calendar.months))

  return {
    monthIndex,
    currentDayWeek,
    setMonthIndex,
    setMonthIndexChanged,
    currentDate,
    currentMonth,
    handleSelectDate,
    currentDateDay,
    months: calendar.months,
  }
}