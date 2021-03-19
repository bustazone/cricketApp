import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { mainColors } from 'styles/colors'
// import { mainColors } from '../../../../../styles/colors'
// import { mainFonts } from '../../../../../styles/fonts'

interface Style {
  flatListContainer: ViewStyle
  header: ViewStyle
  buttonCloseContainer: ViewStyle
  buttonCloseIcon: ViewStyle
  scrollContainer: ViewStyle
  emptyText: TextStyle
}

const styles = StyleSheet.create<Style>({
  flatListContainer: {
    flexDirection: 'column',
    backgroundColor: mainColors.background2,
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: mainColors.disabled,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
  },
  buttonCloseContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
  },
  buttonCloseIcon: {
    height: 20,
    width: 20,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  emptyText: {
    // ...mainFonts.regular,
    // color: mainColors.gray.texts,
    margin: 15,
    borderBottomWidth: 1,
    // borderBottomColor: mainColors.gray.texts,
  },
})

export default styles
