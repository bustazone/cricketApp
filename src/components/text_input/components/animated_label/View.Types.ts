import { StyleProp, TextStyle, ViewStyle } from 'react-native'

export type TextInputLabelViewProps = {
  label: string
  inputSelectedMode: boolean
  style?: StyleProp<ViewStyle>
  styleUnselected?: StyleProp<TextStyle>
  styleSelected?: StyleProp<TextStyle>
}

export type TextInputLabelViewState = {}
