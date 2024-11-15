import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { StyleProp, TextStyle } from 'react-native';

type MaterialIconProps = {
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
  className?: string
  style?: StyleProp<TextStyle>
}

export function MaterialIcon({ name, className, size, style }: MaterialIconProps) {

  return (
    <MaterialCommunityIcons  size={size} name={name} className={className} style={style} />
  )
}