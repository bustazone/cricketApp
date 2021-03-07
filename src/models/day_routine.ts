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
  D,
  L,
  M,
  X,
  J,
  V,
  S,
}
export type Routine = {
  id: string
  oneTimed?: boolean
  name: string
  color: string
  day: DayOfTheWeek[]
  tasks: Task[]
}

export type Task = {
  name: string
  notes: string
  hourStart: Date
  durationMinutes: number
  message: string
}

export type ActiveTask = {
  referenced_task: Task
  date: Date
  mute: boolean
}

export type ActiveWeek = {
  actived: boolean
  notifs_actived: boolean
  sound_actived: boolean
  sound: string | undefined
  ActiveTasks: { date: Date; activeTasks: ActiveTask[] }[]
  routines: Routine[]
}
