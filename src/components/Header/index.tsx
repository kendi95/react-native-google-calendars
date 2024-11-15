import colors from 'tailwindcss/colors'
import { ReactNode, useEffect, useState } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Pressable, Text, TextInput, LayoutChangeEvent } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { Icon } from "../Icon";
import { Menu } from "../Menu";
import { IconButton } from '../IconButton';
import { CalendarTodayIcon } from "../CalendarTodayIcon";

import { useCalendarStore } from "../../store";

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [enabledSearch, setEnabledSearch] = useState(false)
  const { handlers, currentMonthLabel, calendar } = useCalendarStore();

  const heightHeader = useSharedValue(64);
  const opacitySearchContainer = useSharedValue(0);
  const opacityCalendarContainer = useSharedValue(0);

  const animatedHeader = useAnimatedStyle(() => {
    return {
      height: heightHeader.value,
    }
  });

  const animatedOpacityCalendar = useAnimatedStyle(() => {
    return {
      opacity: opacityCalendarContainer.value
    }
  });

  function handleOpen() {
    setOpen((state) => !state)
  }

  function onLayout(event: LayoutChangeEvent) {
    console.log()
  }

  useEffect(() => {
    heightHeader.value = withTiming(open ? 380 : 64, {
      duration: 250,
      easing: Easing.ease
    })
  }, [open]);

  useEffect(() => {
    opacityCalendarContainer.value = withTiming(!enabledSearch ? 1 : 0, {
      duration: 1000,
      easing: Easing.bounce
    })
  }, [enabledSearch]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View 
        style={animatedHeader}
        className="flex-col items-center justify-start bg-zinc-100 shadow-md shadow-zinc-900 py-1 px-0 rounded-lg overflow-hidden"
      >
        {enabledSearch ? (
          <Animated.View className="flex-row items-center w-full gap-2 px-2" style={{}}>
            <IconButton 
              iconName='chevron-right' 
              animated 
              rotate={enabledSearch} 
              onPress={() => setEnabledSearch(false)}
            />

            <TextInput 
              className="w-[86%] py-4 pl-3 placeholder:text-zinc-400 text-zinc-500 font-inter_bold text-lg"
              placeholder="Pesquisar..."
            />
          </Animated.View>
        ) : (
          <Animated.View className="flex-row items-center justify-between w-full px-2" style={animatedOpacityCalendar}>
            <View className="flex-row items-center justify-center gap-2">
              <IconButton iconName='menu' />

              <Pressable 
                android_ripple={{ borderless: false }} 
                className="h-16 w-48 flex-row items-center justify-between px-2"
                onPress={handleOpen}
              >
                <Text className='font-inter_bold text-zinc-700 text-[16px]'>
                  {currentMonthLabel}
                </Text>
                <Icon 
                  size={18} 
                  name="chevron-down" 
                  animated
                  rotate={open}
                  style={{
                    color: colors.zinc[600]
                  }}
                />
              </Pressable>
            </View>
            
            <IconButton 
              className='w-8 h-8 -mr-1'
              iconName='search' 
              iconSize={18} 
              onPress={() => {
                if (open) setOpen(!open);
                setEnabledSearch(true)
              }}
            />

            <Pressable
              android_ripple={{ borderless: true }} 
              className="w-8 h-8 rounded-md items-center justify-center -mr-1"
              onPress={() => handlers.onSelectDate(null)}
            >
              <CalendarTodayIcon 
                width={18} 
                height={18} 
                stroke="#52525b" 
                line={{ stroke: '#52525b' }} 
                label={calendar.todayLabel}
              />
            </Pressable>

            <Menu />
          </Animated.View>
        )}

        {children}
      </Animated.View>
    </GestureHandlerRootView>
  )
}