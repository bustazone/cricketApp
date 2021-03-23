import { DateInputViewTypes } from './view.types'
import {Keyboard} from "react-native";

export function transformModeLocalToMode(type: DateInputViewTypes): 'date' | 'time' | 'datetime' {
  switch (type) {
    case 'date':
      return 'date'
    case 'time':
      return 'time'
    case 'datetime':
      return 'datetime'
    default:
      return 'datetime'
  }
}

const defaultDateFormat = 'YYYY-MM-DD'
const defaultTimeFormat = 'HH:mm'
const defaultDateTimeFormat = 'YYYY-MM-DD HH:mm'
export function defaultFormatByMode(type: DateInputViewTypes): string {
  switch (type) {
    case 'date':
      return defaultDateFormat
    case 'time':
      return defaultTimeFormat
    case 'datetime':
      return defaultDateTimeFormat
    default:
      return defaultDateTimeFormat
  }
}
