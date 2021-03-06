export const defaultDateFormat = 'YYYY-MM-DD'

export enum DayOfTheWeek {
  L = 'L',
  M = 'M',
  X = 'X',
  J = 'J',
  V = 'V',
  S = 'S',
  D = 'D',
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
  hourEnd: Date
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
  ActiveTasksByDay: { date: Date; activeTasks: ActiveTask[] }
  routines: Routine[]
}
