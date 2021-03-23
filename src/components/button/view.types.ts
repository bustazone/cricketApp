import { IconType } from 'components/icons/CommonTypes'
import { StyleProp, TextStyle } from 'react-native'

export type ButtonProps = {
  disabled?: boolean | undefined
  label: string
  onPress: () => void
  leftIcon?: IconType | undefined
  rightIcon?: IconType | undefined
  testID?: string
  style?: StyleProp<TextStyle>
}
