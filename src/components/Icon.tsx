import FeatherIcon from '@expo/vector-icons/Feather'
import { useEffect } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing, interpolate, Extrapolation } from 'react-native-reanimated'

const AnimatedIcon = Animated.createAnimatedComponent(FeatherIcon)

type IconProps = {
  name: keyof typeof FeatherIcon.glyphMap;
  size?: number;
  className?: string
  style?: StyleProp<TextStyle>
  animated?: boolean
  rotate?: boolean
}

export function Icon({ name, size, className, style, animated = false, rotate = false }: IconProps) {

  if (animated) {
    const rotateValue = useSharedValue(0)

    const animatedStyled = useAnimatedStyle(() => {
      return {
        transform: [
          { 
            rotateZ: `${interpolate(
              rotateValue.value,
              [0, 180],
              [0, 180],
              Extrapolation.CLAMP
            )}deg`
          }
        ]
      }
    })

    useEffect(() => {
      rotateValue.value = withTiming(rotate ? 180 : 0, {
        duration: 300,
        easing: Easing.linear
      })
    }, [rotate])

    return <AnimatedIcon  size={size} name={name} className={className} style={[style, animatedStyled]} />
  }

  return (
    <FeatherIcon  size={size} name={name} className={className} style={style} />
  )
}