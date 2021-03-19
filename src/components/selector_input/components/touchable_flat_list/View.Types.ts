import { ViewStyle } from 'react-native'

export type TouchableFlatListViewProps = {
  dataList?: string[]
  onPressItem: (item: string) => void
  onClose: () => void
  style?: ViewStyle
}
