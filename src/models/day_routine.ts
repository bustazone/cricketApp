export const defaultDateFormat = 'YYYY-MM-DD'

export enum DaysOfTheWeekEnum {
  D,
  L,
  M,
  X,
  J,
  V,
  S,
}
export const DaysOfTheWeek = Object.keys(DaysOfTheWeekEnum).filter(x => !(parseInt(x) >= 0))

// export enum DayOfTheWeek {
//   D = 'D',
//   L = 'L',
//   M = 'M',
//   X = 'X',
//   J = 'J',
//   V = 'V',
//   S = 'S',
// }

export const DayOfTheWeekArray = Object.values(DaysOfTheWeekEnum).reduce<string[]>((arr, key) => {
  if (typeof key === 'string') {
    arr.push(key)
  }
  return arr
}, [])

export type Routine = {
  id: number
  name: string
  color: string
  days: DaysOfTheWeekEnum[]
  tasks: number[]
}

export type RoutineTask = {
  id: number
  routineId: number
  name: string
  notes: string
  hourStart: string
  durationMinutes: number
  message: string
}

export type ActiveTaskType = 'routine' | 'recurring' | 'temporizer' | 'unique'

export type ActiveTask = {
  type: ActiveTaskType
  referenced_task: number
  unique_name?: string
  unique_message?: string
  dateAlarm: string
  mute?: boolean
}

export type ActiveWeek = {
  actived: boolean
  notifs_actived: boolean
  sound_actived: boolean
  sound: string | undefined
  activeTasks: ActiveTask[]
  routines: Routine[]
  tasks: RoutineTask[]
}
