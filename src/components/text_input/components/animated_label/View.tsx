import React, { Component, createRef } from 'react'
import { Animated, StyleSheet, TextInput, TextStyle, View } from 'react-native'
import { TextInputLabelViewProps, TextInputLabelViewState } from './View.Types'
import styles from './View.Styles'

class TextInputLabelView extends Component<TextInputLabelViewProps, TextInputLabelViewState> {
  textInputRef = createRef<TextInput>()
  animation
  colorInterpolation
  marginTopInterpolation
  fontSizeInterpolation
  lineHeightInterpolation

  constructor(props: TextInputLabelViewProps) {
    super(props)
    this.animation = new Animated.Value(props.inputSelectedMode ? 0 : 1)
    const stylesSelected = StyleSheet.flatten([props.styleSelected, styles.labelTextSelected])
    const stylesUnselected = StyleSheet.flatten([props.styleUnselected, styles.labelTextUnselected])
    this.colorInterpolation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (stylesUnselected?.color as string) || '#000',
        (stylesSelected?.color as string) || '#000',
      ],
    })
    this.marginTopInterpolation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (stylesSelected.marginTop as number) || 0,
        (stylesUnselected.marginTop as number) || 0,
      ],
    })
    this.fontSizeInterpolation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (stylesSelected.fontSize as number) || 0,
        (stylesUnselected.fontSize as number) || 0,
      ],
    })
    this.lineHeightInterpolation = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        (stylesSelected.lineHeight as number) || 0,
        (stylesUnselected.lineHeight as number) || 0,
      ],
    })
  }

  componentDidUpdate(prevProps: Readonly<TextInputLabelViewProps>) {
    if (prevProps.inputSelectedMode !== this.props.inputSelectedMode) {
      this.animate()
    }
  }

  animate() {
    Animated.timing(this.animation, {
      toValue: this.props.inputSelectedMode ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  render() {
    const animatedStyle: TextStyle = {
      color: (this.colorInterpolation as unknown) as string,
      marginTop: (this.marginTopInterpolation as unknown) as number,
      fontSize: (this.fontSizeInterpolation as unknown) as number,
      lineHeight: (this.lineHeightInterpolation as unknown) as number,
    }
    return (
      <View style={[styles.container, this.props.style]}>
        <Animated.Text
          style={[
            this.props.inputSelectedMode
              ? [this.props.styleSelected, styles.labelTextSelected]
              : [this.props.styleUnselected, styles.labelTextUnselected],
            animatedStyle,
          ]}>
          {this.props.label}
        </Animated.Text>
      </View>
    )
  }
}

export default TextInputLabelView
