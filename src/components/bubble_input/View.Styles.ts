import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { mainColors } from 'styles/colors'

interface Style {
  container: ViewStyle
  inputLabelContainer: ViewStyle
  inputLabelContainerLeftIcon: ViewStyle
  inputIconsContainer: TextStyle
  inputLabelTextSelected: TextStyle
  inputLabelTextUnselected: TextStyle
  inputContainer: ViewStyle
  inputContainerInverted: ViewStyle
  invertedBottomBar: ViewStyle
  textInputContainer: ViewStyle
  textInputContainerLeftIcon: ViewStyle
  regularText: ViewStyle
  numericText: ViewStyle
  additionalTextContainer: ViewStyle
  infoText: TextStyle
  errorText: TextStyle
  leftIconContainer: ViewStyle
  leftIcon: TextStyle
  rightIconContainer: ViewStyle
  secretKeyIcon: TextStyle
  verifiedIcon: TextStyle
  infoIcon: TextStyle
  dropdownIcon: TextStyle
  invertedColor: TextStyle
  disabledColor: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'column',
    width: 319,
  },
  inputContainer: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: mainColors.white,
    borderRadius: 5,
  },
  inputContainerInverted: {
    backgroundColor: 'transparent',
  },
  invertedBottomBar: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: mainColors.white,
    height: 2,
  },
  inputLabelContainer: {
    position: 'absolute',
    top: 0,
    left: 18,
    bottom: 0,
    right: 0,
  },
  inputLabelContainerLeftIcon: {
    left: 52,
  },
  inputLabelTextSelected: {
    color: mainColors.grey,
  },
  inputLabelTextUnselected: {
    color: mainColors.grey,
  },
  inputIconsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textInputContainer: {
    color: mainColors.grey,
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 18,
    paddingTop: 26,
    flex: 1,
  },
  textInputContainerLeftIcon: {
    marginLeft: 0,
  },
  regularText: {
    // ...mainFonts.regular,
    fontSize: 14,
  },
  numericText: {
    fontSize: 15,
  },
  additionalTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    minHeight: 19,
    marginLeft: 18,
  },
  infoText: {
    color: mainColors.grey,
    fontSize: 12,
    lineHeight: 14,
  },
  errorText: {
    color: mainColors.black,
    fontSize: 12,
    lineHeight: 14,
  },
  leftIconContainer: {
    height: '100%',
    paddingHorizontal: 14,
    paddingVertical: 16,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftIcon: {
    color: mainColors.grey,
    height: 24,
    width: 24,
  },
  rightIconContainer: {
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 16,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  secretKeyIcon: {
    color: mainColors.black,
    height: 24,
    width: 24,
  },
  verifiedIcon: {
    color: mainColors.black,
    height: 24,
    width: 24,
  },
  infoIcon: {
    color: mainColors.black,
    height: 24,
    width: 24,
  },
  dropdownIcon: {
    color: mainColors.black,
    height: 24,
    width: 24,
  },
  invertedColor: {
    color: mainColors.white,
  },
  disabledColor: {
    color: mainColors.grey,
  },
})

export default styles
