import { RootState } from 'reducers'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { ActiveTask, ActiveTaskType, DaysOfTheWeekEnum } from 'models/day_routine'
import { saveActiveTasks } from 'actions/sync/Actions'

export function appStateActiveFlow(
  dispatch: ThunkDispatch<any, any, AnyAction>,
  getState: () => RootState,
) {
  // Fill activeTasks by routine values
  const list = getState().tasks.reduce<ActiveTask[]>((acc1, task) => {
    const dayTimedateMillis =
      new Date(task.hourStart).getHours() * 60 * 60 * 1000 +
      new Date(task.hourStart).getMinutes() * 60 * 1000 +
      new Date(task.hourStart).getSeconds() * 1000 +
      task.durationMinutes * 60 * 1000
    return [
      ...acc1,
      ...getState()
        .routines.find(it => it.id === task.routineId)!
        .days.map(day => {
          const date = getNextDateByWeekDay(day)
          return {
            referenced_task: task.id,
            dateAlarm: new Date(new Date(date).getTime() + dayTimedateMillis).toString(),
            type: 'routine' as ActiveTaskType,
          }
        }),
    ]
  }, [])
  dispatch(saveActiveTasks(list))
}

function getNextDateByWeekDay(day: DaysOfTheWeekEnum) {
  const date = new Date(new Date().toDateString())
  const currentWeekDayIndex = date.getDay()
  if (day < currentWeekDayIndex) {
    return new Date(date.getTime() + (7 - (currentWeekDayIndex - day)) * 24 * 60 * 60 * 1000)
  } else {
    return new Date(date.getTime() + (day - currentWeekDayIndex) * 24 * 60 * 60 * 1000)
  }
}
