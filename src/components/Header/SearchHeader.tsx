import { TextInput } from 'react-native';
import Animated, { 
  Easing, 
  Extrapolation, 
  interpolate, 
  useAnimatedStyle, 
  useSharedValue,
  withTiming 
} from 'react-native-reanimated';

import { IconButton } from '@/components/IconButton';
import { useEffect, useState } from 'react';

export function SearchHeader() {
  const [ enabledSearch, setEnabledSearch ] = useState(false);
  const opacitySearchContainer = useSharedValue(0);

  const animatedOpacitySearch = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        opacitySearchContainer.value,
        [0, 1],
        [0, 1],
        Extrapolation.CLAMP
      )
    }
  });

  useEffect(() => {
    opacitySearchContainer.value = withTiming(enabledSearch ? 1 : 0, {
      duration: 250,
      easing: Easing.bounce
    })
  }, [])

  return (
    <Animated.View className="flex-row items-center w-full gap-2 px-2" style={animatedOpacitySearch}>
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
  )
}