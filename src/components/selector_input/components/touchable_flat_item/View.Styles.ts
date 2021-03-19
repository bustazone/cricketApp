import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { mainColors } from 'styles/colors'

interface Style {
  itemContainer: ViewStyle
  itemContainerSeparator: ViewStyle
  itemText: TextStyle
}

const styles = StyleSheet.create<Style>({
  itemContainer: {
    padding: 13,
    paddingLeft: 16,
  },
  itemContainerSeparator: {
    borderBottomColor: mainColors.disabled,
    borderBottomWidth: 1,
  },
  itemText: {
    color: mainColors.greyDark,
    fontSize: 14,
  },
})

export default styles
