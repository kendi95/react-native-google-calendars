import dayjs from "dayjs";

type GenerateDateProps = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
  year: number;
}

type DataDate = {
  currentMonth: boolean;
  date: dayjs.Dayjs;
}

export function generateDate({ month, year }: GenerateDateProps) {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  const arrayOfDate = [] as DataDate[];

  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.day(i),
      currentMonth: false
    });
  }

  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({
      date: firstDateOfMonth.date(i),
      currentMonth: true,
    });
  }

  const remaining = (42 - 7) - arrayOfDate.length;

  for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
    arrayOfDate.push({
      date: lastDateOfMonth.date(i),
      currentMonth: false
    });
  }

  return arrayOfDate;
}