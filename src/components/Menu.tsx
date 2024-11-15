import { useState } from "react";
import { Pressable } from "react-native";

import { MaterialIcon } from './MaterialIcon';

import { useAppStore } from '../store';
import { MenuItem } from "../types/menu";

type MenuProps = {
  onMenuChange?: (item: MenuItem) => void;
}

export function Menu({}: MenuProps) {
  const [counter, setCounter] = useState(0)
  const { menuItems, selectedItem } = useAppStore((state) => state.app);
  const [selectedMenu, setSelectedMenu] = useState<MenuItem>(
    selectedItem.id ? selectedItem : menuItems[0]
  )

  function handleChangeMenu() {
    setSelectedMenu(menuItems[counter])
    setCounter((state) => state === 4 ? 0 : state + 1)
  }

  return (
    <Pressable
      android_ripple={{ borderless: true }} 
      className="w-8 h-8 rounded-md items-center justify-center"
      onPress={handleChangeMenu}
    >
      <MaterialIcon size={20} name={selectedMenu.iconName} className='text-zinc-600' />
    </Pressable>
  )
}