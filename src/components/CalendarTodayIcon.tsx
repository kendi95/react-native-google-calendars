import { Text } from "react-native"
import Svg, { SvgProps, Line, LineProps } from "react-native-svg"

type CalendarTodayIconProps = SvgProps & {
  line?: LineProps
  label: string
}

export function CalendarTodayIcon({ label, ...rest }: CalendarTodayIconProps) {

  return (
    <Svg
      width={305}
      height={300}
      viewBox="0 0 305 300"
      fill="none"
      stroke={rest.stroke}
      {...rest}
    >
      <Line
        x1={4.50403}
        y1={-0.00604248}
        x2={4.50403}
        y2={299.994}
        stroke={rest.line?.stroke}
        strokeWidth={56}
      />
      <Line 
        x1={301} 
        x2={301} 
        y2={196} 
        stroke={rest.line?.stroke}
        strokeWidth={56}
      />
      <Line
        x1={194.226}
        y1={297.063}
        x2={302.226}
        y2={193.118}
        stroke={rest.line?.stroke}
        strokeWidth={56}
      />
      <Line 
        x1={1} 
        y1={4} 
        x2={301} 
        y2={4} 
        stroke={rest.line?.stroke}
        strokeWidth={56} 
      />
      <Line 
        x1={1} 
        y1={296} 
        x2={197} 
        y2={296} 
        stroke={rest.line?.stroke}
        strokeWidth={56} 
      />

      <Text className="text-zinc-600 font-inter_bold text-xs text-center mt-[2px]">
        {label}
      </Text>
    </Svg>
  )
}