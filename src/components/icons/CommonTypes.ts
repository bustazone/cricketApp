import { StyleProp, TextStyle } from 'react-native'
import { FunctionComponent } from 'react'

export type IconProps = {
  testID?: string
  style?: StyleProp<TextStyle>
}

export type IconType = FunctionComponent<IconProps>
