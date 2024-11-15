import { Pressable, PressableProps, Text, View } from "react-native";

type DateCalendarProps = PressableProps & {
  label: string;
  isToday: boolean;
  selected?: boolean;
  currentMonth: boolean;
}

export function DateCalendar({ label, isToday, selected, currentMonth, ...rest }: DateCalendarProps) {
  const color = selected ? 'bg-red-600' : isToday ? 'bg-red-500' : 'bg-zinc-100';

  if (!currentMonth) {
    return <View className="w-12 h-12" />
  } 

  return (
    <Pressable
      {...rest}
      android_ripple={{
        borderless: true,
        radius: 24,
        color: '#ef444420'
      }}
      className={`w-12 h-12 ${color} flex items-center justify-center rounded-full`}
    >
      <Text className={`${isToday || selected ? 'text-zinc-100 font-inter_bold' : 'text-zinc-500 font-inter_medium'} text-center`}>
        {label}
      </Text>
    </Pressable>
  )
}