export type Dates = {
  date: Date
  labelDate: string
  weekDay: string
  sortWeekDay: string
  formattedDate: string
  currentMonth: boolean
  year: number
}

export type Months = {
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | number;
  monthLabel: string;
  monthYear: string;
  dates: Dates[]
}