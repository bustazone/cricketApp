export const defaultDateFormat = 'YYYY-MM-DD'

// export enum DayOfTheWeek {
//   D = 'D',
//   L = 'L',
//   M = 'M',
//   X = 'X',
//   J = 'J',
//   V = 'V',
//   S = 'S',
// }

export enum DayOfTheWeek {
  D = 'D',
  L = 'L',
  M = 'M',
  X = 'X',
  J = 'J',
  V = 'V',
  S = 'S',
}

export const DayOfTheWeekArray = Object.values(DayOfTheWeek).reduce<string[]>((arr, key) => {
  if (typeof key === 'string') {
    arr.push(key)
  }
  return arr
}, [])

export type Routine = {
  id: string
  name: string
  color: string
  days: DayOfTheWeek[]
  tasks: RoutineTask[]
}

export type RoutineTask = {
  routineId: string
  name: string
  notes: string
  hourStart: string
  durationMinutes: number
  message: string
}

export type ActiveTaskType = 'routine' | 'recurring' | 'temporizer' | 'unique'

export type ActiveTask = {
  type: ActiveTaskType
  referenced_task: RoutineTask
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
  ActiveTasks: ActiveTask[]
  routines: Routine[]
}
