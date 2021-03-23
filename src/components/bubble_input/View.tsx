import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BubbleInputViewProps, BubbleInputViewState } from './View.Types'
import styles from './View.Styles'
import TextInputLabelView from './components/animated_label/View'
import { ScrollView } from 'react-native-gesture-handler'

class BubbleInputView extends Component<BubbleInputViewProps, BubbleInputViewState> {
  constructor(props: BubbleInputViewProps) {
    super(props)
    this.state = {}
    this.onSelectedItem = this.onSelectedItem.bind(this)
  }

  onSelectedItem(value: string) {
    if (this.props.type === 'multi') {
      if (!(this.props.value || []).includes(value)) {
        this.props.onSelectionChanged([...(this.props.value || []), value])
      } else {
        this.props.onSelectionChanged(this.props.value!.filter(it => it !== value))
      }
    } else {
      this.props.onSelectionChanged([value])
    }
  }

  render() {
    return (
      <View testID={this.props.testID} style={[styles.container, this.props.style]}>
        <View style={[styles.inputContainer]}>
          <TextInputLabelView
            label={this.props.label}
            inputSelectedMode={true}
            style={[styles.inputLabelContainer, this.props.disabled ? styles.disabledColor : {}]}
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
            <ScrollView horizontal style={styles.textInputContainer}>
              {this.props.items.map(it => {
                return (
                  <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => {
                      this.onSelectedItem(it.valueId)
                    }}>
                    <View
                      style={{
                        height: 30,
                        width: 30,
                        borderRadius: 30,
                        backgroundColor: it.color || '#BBB',
                        opacity: (this.props.value || []).includes(it.valueId) ? 1 : 0.3,
                      }}>
                      <Text
                        style={{
                          lineHeight: 30,
                          textAlign: 'center',
                          textAlignVertical: 'center',
                        }}>
                        {it.label}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
        </View>
        <View style={styles.additionalTextContainer}>
          <Text style={styles.errorText}>{this.props.errorText}</Text>
        </View>
      </View>
    )
  }
}

export default BubbleInputView
