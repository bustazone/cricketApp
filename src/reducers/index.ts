import { ActiveWeek, DayOfTheWeek } from 'models/day_routine'
import storage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'
import { mainColors } from 'styles/colors'

export type RootState = ActiveWeek

const initialState: RootState = {
  ActiveTasks: [
    {
      type: 'routine',
      referenced_task: {
        name: 'asdfwew',
        durationMinutes: 130,
        hourStart: new Date().toISOString(),
        message: 'asfvvs',
        notes: 'kjndskjnsd',
        routineId: '1',
      },
      dateAlarm: new Date().toISOString(),
    },
  ],
  actived: true,
  notifs_actived: true,
  sound_actived: true,
  sound: undefined, // TODO sonido predefinido
  routines: [
    {
      id: Math.random().toString(),
      color: mainColors.grey,
      days: [
        DayOfTheWeek.L,
        DayOfTheWeek.M,
        DayOfTheWeek.X,
        DayOfTheWeek.J,
        DayOfTheWeek.V,
        DayOfTheWeek.S,
        DayOfTheWeek.D,
      ],
      name: 'CustomTasks',
      tasks: [],
    },
  ],
}

const rootReducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
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
