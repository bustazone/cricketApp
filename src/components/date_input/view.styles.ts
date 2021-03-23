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
    backgroundColor: getColorWithAlpha(mainColors.black, 0.4),
  },
  modalList: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})

export default styles
