import { ActiveWeek, DaysOfTheWeekEnum } from 'models/day_routine'
import storage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'
import { mainColors } from 'styles/colors'
import { SAVE_ACTIVE_TASK } from 'actions/sync/ActionConstants'
import { SaveActiveTaskActionInterface } from 'actions/sync/Actions.Types'

export type RootState = ActiveWeek

const initialState: RootState = {
  activeTasks: [],
  actived: true,
  notifs_actived: true,
  sound_actived: true,
  sound: undefined, // TODO sonido predefinido
  routines: [
    {
      id: 0,
      color: mainColors.grey,
      days: [
        DaysOfTheWeekEnum.L,
        DaysOfTheWeekEnum.M,
        DaysOfTheWeekEnum.X,
        DaysOfTheWeekEnum.J,
        DaysOfTheWeekEnum.V,
        DaysOfTheWeekEnum.S,
      ],
      name: 'Routine1',
      tasks: [0, 1],
    },
    {
      id: 1,
      color: mainColors.grey,
      days: [DaysOfTheWeekEnum.L, DaysOfTheWeekEnum.M, DaysOfTheWeekEnum.X, DaysOfTheWeekEnum.V],
      name: 'Routine2',
      tasks: [2],
    },
  ],
  tasks: [
    {
      id: 0,
      routineId: 0,
      name: 'task1',
      hourStart: new Date(new Date().getTime() + 60 * 60 * 1000).toString(),
      durationMinutes: 90,
      notes: 'notes',
      message: 'message1',
    },
    {
      id: 1,
      routineId: 0,
      name: 'task2',
      hourStart: new Date(new Date().getTime() + 6 * 60 * 60 * 1000).toString(),
      durationMinutes: 90,
      notes: 'notes',
      message: 'message1',
    },
    {
      id: 2,
      routineId: 1,
      name: 'task3',
      hourStart: new Date(new Date().getTime() + 4 * 60 * 60 * 1000).toString(),
      durationMinutes: 90,
      notes: 'notes',
      message: 'message1',
    },
  ],
}

const rootReducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case SAVE_ACTIVE_TASK:
      return { ...state, activeTasks: (action as SaveActiveTaskActionInterface).list }
    default:
      return state
  }
}

const persistRootConfig = {
  key: 'rootAuth',
  storage,
}

const persistRootReducer = persistReducer<RootState>(persistRootConfig, rootReducer)

export default persistRootReducer
