import { useEffect, useRef } from "react";
import { 
  FlatList, 
  ViewToken, 
  GestureResponderEvent 
} from "react-native";

import { useCalendarStore } from "@/store";
import { Months } from "@/types/calendar";

import { MonthCalendar } from "@/components/Calendar/MonthCalendar";

type CalendarProps = {
}

type ScrollToIndexFailedProps = {
  index: number;
  highestMeasuredFrameIndex: number;
  averageItemLength: number;
}

type ViewableItemsChangedProps = {
  viewableItems: ViewToken<Months>[]
  changed: ViewToken<Months>[]
}

export function Calendar({ }: CalendarProps) {
  const { selectedDate, handlers, calendar, currentMonth } = useCalendarStore();
  const animatedScrollViewRef = useRef<FlatList>(null);

  function onScrollToIndexFailed(info: ScrollToIndexFailedProps) {
    const response = new Promise(resolve => setTimeout(resolve, 500));
    response.then(() => {
      animatedScrollViewRef.current?.scrollToIndex({
        index: info.index,
        animated: true,
      })
    })
  }
  
  function onViewableItemsChanged(info: ViewableItemsChangedProps) {
    if (info.viewableItems[0] === undefined) {
      return;
    }

    let { item, index } = info.viewableItems[0];

    if (index === undefined || index === null) {
      index =  0;
    }
    
    if (item === undefined) {
      item = calendar.months[index];
    }

    handlers.onChangeMonthLabel(item?.monthYear);
    handlers.setMonthIndex(index);

    if (calendar.months.length - 1 === index) {
      handlers.handleIncreaseMonth();
      return;
    }

    if (calendar.months.length - calendar.months.length === index) {
      handlers.handleDecreaseMonth();
      return;
    }
  }

  function onResponderEnd(event: GestureResponderEvent) {
    const { currentTarget } = event;
    // console.log('SHOW onResponderEnd ->', currentTarget);
  }

  useEffect(() => {
    calendar.months.forEach((month, index) => {
      if (month.monthLabel === currentMonth && !selectedDate) {
        animatedScrollViewRef.current?.scrollToIndex({
          index,
          animated: true,
        })
      }
    })
  }, [selectedDate]);

  return (
    <FlatList 
      ref={animatedScrollViewRef}
      data={calendar.months}
      horizontal
      bounces={false}
      initialScrollIndex={calendar.monthIndex}
      onScrollToIndexFailed={onScrollToIndexFailed}
      onViewableItemsChanged={onViewableItemsChanged}
      onResponderEnd={onResponderEnd}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 0 }}
      scrollEventThrottle={50}
      pagingEnabled
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
      }}
      keyExtractor={(item) => item.monthYear}
      renderItem={({ item }: { item: Months; index: number }) => (
        <MonthCalendar month={item} />
      )}
    />
  )
}