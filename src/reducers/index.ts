import { ActiveWeek, DayOfTheWeek } from 'models/dayRoutine'
import storage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'
import { mainColors } from 'styles/colors'

export type RootState = ActiveWeek

const initialState: RootState = {
  ActiveTasks: {
    L: [],
    M: [],
    X: [],
    J: [],
    V: [],
    S: [],
    D: [],
  },
  actived: true,
  notifs_actived: true,
  sound_actived: true,
  sound: undefined, // TODO sonido predefinido
  routines: [
    {
      color: mainColors.grey,
      day: [
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
  whitelist: ['token_credentials'],
}

const persistRootReducer = persistReducer<RootState>(persistRootConfig, rootReducer)

export default persistRootReducer
