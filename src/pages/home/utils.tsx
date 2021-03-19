import { DaysOfTheWeek } from 'models/day_routine'

export function getTabsOrdered(): string[] {
  return [
    ...DaysOfTheWeek.slice(new Date().getDay()),
    ...DaysOfTheWeek.slice(0, new Date().getDay()),
  ]
}
