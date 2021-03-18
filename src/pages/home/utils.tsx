import { DaysOfTheWeek } from 'models/day_routine'

export function getTabsOrdered(): string[] {
  console.log('getTabsOrdered')
  console.log(DaysOfTheWeek)
  return [
    ...DaysOfTheWeek.slice(new Date().getDay()),
    ...DaysOfTheWeek.slice(0, new Date().getDay()),
  ]
}
