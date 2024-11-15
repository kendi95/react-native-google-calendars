import * as Crypto from 'expo-crypto';

import { MenuItem } from '../types/menu';

export const initialApp = {
  menuItems: [
    { title: 'Agenda', iconName: 'view-agenda-outline', id: Crypto.randomUUID(), slug: 'agend' },
    { title: 'Dia', iconName: 'view-day-outline', id: Crypto.randomUUID(), slud: 'day' },
    { title: '3 dias', iconName: 'view-week-outline', id: Crypto.randomUUID(), slud: 'days' },
    { title: 'Semana', iconName: 'view-week-outline', id: Crypto.randomUUID(), slud: 'week' },
    { title: 'Mês', iconName: 'view-module-outline', id: Crypto.randomUUID(), slud: 'month' },
  ] as MenuItem[],
  selectedItem: {} as MenuItem,
  currentMonthLabel: 'Novembro',
  todayLabel: '01',
  currentDate: '',
  currentDayWeek: '',
  currentMonth: '',
  monthIndex: 0
}
