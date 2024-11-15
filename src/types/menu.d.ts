import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export type MenuItem = {
  id: string;
  title: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  slud: string;
}