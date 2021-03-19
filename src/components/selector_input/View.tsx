import React, { Component, createRef } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import TextInput from '../text_input'
import TouchableFlatList from './components/touchable_flat_list/View'
import { SelectorViewProps, SelectorViewState } from './View.Types'
import styles from './View.Styles'

class Selector extends Component<SelectorViewProps, SelectorViewState> {
  textInputRef = createRef<TextInput>()
  constructor(props: SelectorViewProps) {
    super(props)
    this.state = {
      visible: false,
    }
    this.onPressItem = this.onPressItem.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  onPressItem = (item: string) => {
    this.setState({ visible: false })
    this.textInputRef.current?.blur()
    this.props.onValueChange(item)
  }

  onClose = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          {...this.props}
          ref={this.textInputRef}
          label={this.props.label}
          type={'dropdown'}
          onFocus={() => {
            this.textInputRef.current?.blur()
            this.setState({ visible: true })
          }}
        />
        {this.props.dataList && this.props.dataList.length > 0 && visible && (
          <Modal animationType="slide" visible={visible} transparent onRequestClose={this.onClose}>
            <TouchableOpacity style={styles.modalBG} activeOpacity={1} onPress={this.onClose}>
              <TouchableFlatList
                style={styles.modalList}
                onPressItem={this.onPressItem}
                dataList={this.props.dataList}
                onClose={this.onClose}
              />
            </TouchableOpacity>
          </Modal>
        )}
      </View>
    )
  }
}

export default Selector
