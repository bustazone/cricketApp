import { StyleSheet, ViewStyle } from 'react-native'

interface Style {
  container: ViewStyle
  centralButtonContainer: ViewStyle
  centralButton: ViewStyle
  sliderContainer: ViewStyle
  slidePanel: ViewStyle
  settingsPanel: ViewStyle
  creationPanel: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: { position: 'absolute', width: '100%', height: '100%', flex: 1 },
  centralButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
  },
  centralButton: { backgroundColor: '#F00', width: 64, height: 64, borderRadius: 64 },
  sliderContainer: {
    width: '100%',
    position: 'absolute',
  },
  slidePanel: {
    width: '100%',
    position: 'relative',
    paddingBottom: 70,
  },
  settingsPanel: {
    backgroundColor: 'green',
  },
  creationPanel: {
    backgroundColor: 'red',
  },
})

export default styles
