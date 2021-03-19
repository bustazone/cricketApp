import React, { Component, createRef } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TextInputViewProps, TextInputViewState } from './View.Types'
import styles from './View.Styles'
import TextInputLabelView from './components/animated_label/View'
import Icons from 'components/icons'

class TextInputView extends Component<TextInputViewProps, TextInputViewState> {
  textInputRef = createRef<TextInput>()

  // external exposed functions
  blur() {
    this.textInputRef.current?.blur()
  }

  focus() {
    this.textInputRef.current?.focus()
  }

  restoreValue() {
    this.setCurrentText(this.props.value)
  }
  // ---------

  constructor(props: TextInputViewProps) {
    super(props)
    this.state = {
      secretKey: props.type === 'secretKey',
      focus: false,
      currentText: '',
    }
    this.restoreValue = this.restoreValue.bind(this)
    this.blur = this.blur.bind(this)
    this.focus = this.focus.bind(this)
    this.setKeyboardType = this.setKeyboardType.bind(this)
    this.onTextChangeEnd = this.onTextChangeEnd.bind(this)
    this.processValue = this.processValue.bind(this)
    this.setCurrentText = this.setCurrentText.bind(this)
  }

  componentDidMount() {
    if (this.props.value !== undefined) {
      this.processValue()
    }
  }

  componentDidUpdate(prevProps: Readonly<TextInputViewProps>) {
    if (this.props.value !== undefined && this.props.value !== prevProps.value) {
      this.processValue()
    }
  }

  processValue() {
    this.setCurrentText(this.props.value)
  }

  setCurrentText(value: string | undefined) {
    this.setState({
      currentText: value || '',
    })
  }

  setKeyboardType() {
    if (this.props.type === 'numeric' || this.props.type === 'phone') {
      return 'numeric'
    } else if (this.props.type === 'email') {
      return 'email-address'
    }
    return 'default'
  }

  setAutoCompleteType() {
    if (this.props.type === 'email') {
      return 'email'
    } else if (this.props.type === 'secretKey') {
      return 'password'
    }
    return undefined
  }

  onTextChange(value: string) {
    if (!this.props.onTextChange && this.props.onTextChangeEnd) this.props.onTextChangeEnd(value)
    if (this.props.onTextChange) this.props.onTextChange(value)
    this.setCurrentText(value)
  }

  onTextChangeEnd() {
    if (this.props.onTextChangeEnd) this.props.onTextChangeEnd(this.state.currentText)
  }

  render() {
    const LeftIcon = this.props.leftIcon
    return (
      <View testID={this.props.testID} style={[styles.container, this.props.style]}>
        <TouchableOpacity
          style={[styles.inputContainer]}
          onPress={() => {
            this.focus()
          }}
          disabled={this.props.type !== 'dropdown'}>
          <TextInputLabelView
            label={this.props.label}
            inputSelectedMode={this.state.focus || !!this.state.currentText}
            style={[
              styles.inputLabelContainer,
              this.props.disabled ? styles.disabledColor : {},
              this.props.leftIcon ? styles.inputLabelContainerLeftIcon : {},
            ]}
            styleSelected={[
              styles.inputLabelTextSelected,
              this.props.disabled ? styles.disabledColor : {},
            ]}
            styleUnselected={[
              styles.inputLabelTextUnselected,
              this.props.disabled ? styles.disabledColor : {},
            ]}
          />
          <View style={styles.inputIconsContainer}>
            {LeftIcon && (
              <View style={styles.leftIconContainer}>
                <LeftIcon
                  style={[styles.leftIcon, this.props.disabled ? styles.disabledColor : {}]}
                />
              </View>
            )}
            <TextInput
              ref={this.textInputRef}
              style={[
                styles.textInputContainer,
                this.props.disabled ? styles.disabledColor : {},
                this.props.leftIcon ? styles.textInputContainerLeftIcon : {},
              ]}
              onChangeText={(text: string) => {
                this.setState(
                  {
                    currentText: text,
                  },
                  () => {
                    if (this.props.onTextChangeEnd) this.onTextChangeEnd()
                    if (this.props.onTextChange) this.props.onTextChange(text)
                  },
                )
              }}
              value={this.state.currentText}
              secureTextEntry={this.state.secretKey || false}
              keyboardType={this.setKeyboardType()}
              autoCompleteType={this.setAutoCompleteType()}
              autoCapitalize={'none'}
              placeholder={this.props.placeholder}
              onEndEditing={() => {
                this.onTextChangeEnd()
              }}
              onFocus={e => {
                if (this.props.onFocus) this.props.onFocus(e)
                this.setState({
                  focus: true,
                })
              }}
              onBlur={e => {
                if (this.props.onBlur) this.props.onBlur(e)
                this.setState({
                  focus: false,
                })
              }}
              editable={!this.props.disabled}
            />
            {this.props.type === 'dropdown' && (
              <View style={styles.rightIconContainer}>
                <Text
                  style={[styles.dropdownIcon, this.props.disabled ? styles.disabledColor : {}]}>
                  v
                </Text>
              </View>
            )}
            {this.props.type === 'secretKey' && (
              <TouchableOpacity
                style={styles.rightIconContainer}
                onPress={() => {
                  this.setState({
                    secretKey: !this.state.secretKey,
                  })
                }}>
                {this.state.secretKey ? (
                  <Icons.content.EyeShown
                    style={[styles.secretKeyIcon, this.props.disabled ? styles.disabledColor : {}]}
                  />
                ) : (
                  <Icons.content.EyeHidden
                    style={[styles.secretKeyIcon, this.props.disabled ? styles.disabledColor : {}]}
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.additionalTextContainer}>
          <Text style={styles.errorText}>{this.props.errorText}</Text>
        </View>
      </View>
    )
  }
}

export default TextInputView
