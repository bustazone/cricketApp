import { ViewStyle } from 'react-native'

export type BubbleItemType = {
  valueId: string
  color?: string
  label?: string
}

export type BubbleInputViewProps = {
  label: string
  value?: string[]
  items: BubbleItemType[]
  onSelectionChanged: (value: string[]) => void
  type?: 'multi' | 'single'
  errorText?: string
  style?: ViewStyle
  testID?: string
  disabled?: boolean
}

export type BubbleInputViewState = {}
