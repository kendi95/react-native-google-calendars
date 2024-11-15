import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { Animated, ScrollView } from 'react-native'
import { useRef } from "react";

type CarouselProps = {
  children: React.ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  

  const pan = Gesture.Pan()
    .onStart(event => {
    })
    .onUpdate(event => {
      console.log(event.x)
    });
  
  return (
    <GestureDetector gesture={pan}>
      {/* <Animated.ScrollView 
        className="h-full"
        horizontal 
        showsHorizontalScrollIndicator={false}
        scrollEnabled
      >
      </Animated.ScrollView> */}
      {children}
    </GestureDetector>
  )
}