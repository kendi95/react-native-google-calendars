import FeatherIcon from '@expo/vector-icons/Feather'
import { Pressable, PressableProps } from "react-native";

import { Icon } from "@/components/Icon";

import { cn } from '@/libs/utils';

type IconButtonProps = PressableProps & {
  iconName: keyof typeof FeatherIcon.glyphMap;
  iconSize?: number
  animated?: boolean;
  rotate?: boolean;
}

export function IconButton({ 
  iconName, 
  iconSize = 20, 
  animated = false, 
  rotate = false,
  ...rest 
}: IconButtonProps) {

  return (
    <Pressable
      {...rest}
      android_ripple={{ borderless: true }} 
      className={cn(rest.className, "w-9 h-9 rounded-md items-center justify-center ml-2")}
    >
      <Icon 
        size={iconSize} 
        name={iconName} 
        animated={animated} 
        rotate={rotate}
        className='text-zinc-600' 
      />
    </Pressable>
  )
}