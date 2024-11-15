import { MenuItem } from "./menu"

export type AppStore = {
  app: {
    menuItems: MenuItem[];
    selectedItem: MenuItem;
  };
  handlers: {
    selectMenuItem: (item: MenuItem) => void
  }
}