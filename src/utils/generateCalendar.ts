import dayjs from "dayjs";

import { Dates, Months } from "../types/calendar";
import { generateDate } from "./generateDate";

const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const sortWeekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const today = dayjs();
const weekIndex = today.day();
const year = today.year();
const currMonth = today.month();

let arrayMonth = [] as Months[];

const prevCurrMonth = currMonth === 0 ? 11 : currMonth - 1;
const nextCurrMonth = currMonth === 11 ? 0 : currMonth + 1;

for (let i = prevCurrMonth; i <= nextCurrMonth; i++) {
  let calendarDate = [] as Dates[];

  const date = generateDate({ month: i, year });

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

  arrayMonth.push({
    month: i,
    monthLabel: months[i],
    monthYear: `${months[i]} - ${year}`,
    dates: calendarDate
  })
}

const firstLetterUppercase = dayjs().format('MMMM').charAt(0).toUpperCase()
const otherLetters = dayjs().format('MMMM').slice(1)

export const month = arrayMonth;
export const currentMonthLabel = `${firstLetterUppercase}${otherLetters} - ${year}`;
export const todayLabel = dayjs().date();
export const currentDate = dayjs().format('YYYY-MM-DD');
export const currentDayWeek = sortWeekDays[dayjs().day()];  
export const currentMonth = `${firstLetterUppercase}${otherLetters}`;

let monthI = 0;
arrayMonth.forEach((month, indexMonth) => {
  month.dates.forEach((date) => {
    if (date.formattedDate === currentDate) {
      monthI = indexMonth;
    }
  })
})

export const monthIndex = monthI;
export const currentDateInDayJs = today;