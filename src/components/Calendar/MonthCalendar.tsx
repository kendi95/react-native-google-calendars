import { View } from "react-native";

import { useCalendarStore } from "@/store";
import { Dates, Months } from "@/types/calendar";

import { DateCalendar } from "@/components/Calendar/DateCalendar";
import { WeekCalendar } from "@/components/Calendar/WeekCalendar";

type MonthCalendarProps = {
  month: Months;
}

export function MonthCalendar({ month }: MonthCalendarProps) {
  const { selectedDate, currentDate, handlers } = useCalendarStore();

  return (
    <View className="flex flex-col items-center justify-center p-2 pb-4 mt-3 max-w-auto overflow-hidden">
      <View className="flex-row flex-wrap items-center justify-center w-full max-w-[330px] gap-[6px] mb-1">
        <WeekCalendar month={month} />
      </View>
      <View className="flex-row flex-wrap items-center justify-start w-full max-w-[330px] gap-[6px]">
        {month.dates.map((date: Dates) => {
          return (
            <DateCalendar 
              key={date.date.toDateString()} 
              label={date.labelDate} 
              isToday={date.formattedDate === currentDate}
              selected={selectedDate === date.date}
              currentMonth={date.currentMonth}
              onPress={() => handlers.onSelectDate(date.date)}
            />
          )
        })}
      </View>
    </View>
  )
}