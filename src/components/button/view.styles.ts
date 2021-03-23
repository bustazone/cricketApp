import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from 'react-native'

import { mainColors } from 'styles/colors'

interface Style {
  containerBase: ViewStyle
  labelBase: TextStyle
  iconBase: ImageStyle
}

const styles = StyleSheet.create<Style>({
  containerBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    paddingHorizontal: 30,
    backgroundColor: '#f00',
  },
  labelBase: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 16,
    marginHorizontal: 6,
  },
  iconBase: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    tintColor: mainColors.white,
  },
})

export default styles
