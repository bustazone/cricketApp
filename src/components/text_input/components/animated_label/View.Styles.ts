import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Style {
  container: ViewStyle
  labelTextSelected: TextStyle
  labelTextUnselected: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {},
  labelTextSelected: {
    marginTop: 7,
    fontSize: 12,
    lineHeight: 14,
  },
  labelTextUnselected: {
    marginTop: 19,
    fontSize: 16,
    lineHeight: 18,
  },
})

export default styles
