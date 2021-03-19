import { StyleSheet, ViewStyle } from 'react-native'
import { getColorWithAlpha, mainColors } from 'styles/colors'

interface Style {
  container: ViewStyle
  modalBG: ViewStyle
  modalList: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {},
  modalBG: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 64,
    backgroundColor: getColorWithAlpha(mainColors.greyMedium, 0.4),
  },
  modalList: {
    width: '100%',
    maxHeight: '100%',
  },
})

export default styles
