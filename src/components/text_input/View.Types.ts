import { ViewStyle } from 'react-native'
import { IconType } from 'components/icons/CommonTypes'

export type TextInputViewProps = {
  value?: string
  label: string
  onTextChange?: (text: string) => void
  onTextChangeEnd?: (text: string) => void
  placeholder?: string
  type?: 'secretKey' | 'numeric' | 'phone' | 'email' | 'dropdown'
  errorText?: string
  leftIcon?: IconType
  style?: ViewStyle
  testID?: string
  onBlur?: (e: any) => void
  onFocus?: (e: any) => void
  disabled?: boolean
}

export type TextInputViewState = {
  secretKey: boolean
  focus: boolean
  currentText: string
}
