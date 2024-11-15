import { Text } from "react-native";

import { useCalendarStore } from "@/store";

import { Months } from "@/types/calendar";

type WeekCalendarProps = {
  month: Months
}

export function WeekCalendar({ month }: WeekCalendarProps) {
  const { calendar, currentDayWeek, currentMonth } = useCalendarStore();

  return (
    <>
      {calendar.sortWeekDays.map((week) => (
        <Text
          key={`${week} - ${month.monthYear}`} 
          className={`w-12 text-center ${currentDayWeek === week && month.monthLabel === currentMonth ? 'text-zinc-800 font-inter_bold' : 'text-zinc-400 font-inter_regular'}`}
        >
          {week}
        </Text>
      ))}
    </>
  )
}