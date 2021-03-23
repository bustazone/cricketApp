import React, { Component, createRef } from 'react'
import { Keyboard, View } from 'react-native'
import TextInput from '../text_input'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { DateInputViewProps, DateInputViewState } from './view.types'
import styles from './view.styles'
import moment from 'moment'
import { defaultFormatByMode, transformModeLocalToMode } from 'components/date_input/view.utils'

class Selector extends Component<DateInputViewProps, DateInputViewState> {
  textInputRef = createRef<TextInput>()
  constructor(props: DateInputViewProps) {
    super(props)
    this.state = {
      isPickerVisible: false,
    }
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onFocusDateInput = this.onFocusDateInput.bind(this)
  }

  componentDidUpdate(prevProps: Readonly<DateInputViewProps>) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        isPickerVisible: false,
      })
    }
  }

  onChangeDate(selectedDate: Date) {
    // const { format = defaultDateFormat } = this.props
    if (selectedDate) {
      // this.props.onChangeDate(moment(selectedDate).format(format))
      this.props.onDateChanged(selectedDate)
      this.setState({
        isPickerVisible: false,
      })
    }
  }

  onFocusDateInput() {
    Keyboard.dismiss()
    this.setState({ isPickerVisible: true })
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TextInput
          {...this.props}
          ref={this.textInputRef}
          label={this.props.label}
          value={
            this.props.value
              ? moment(this.props.value).format(
                  this.props.inputFormat || defaultFormatByMode(this.props.mode),
                )
              : ''
          }
          onFocus={() => {
            this.textInputRef.current?.blur()
            this.setState({ isPickerVisible: true })
          }}
        />
        <DateTimePickerModal
          date={this.props.value}
          isVisible={this.state.isPickerVisible}
          mode={transformModeLocalToMode(this.props.mode)}
          // headerTextIOS={I18n.t('components.form_components.date_input.label')}
          // confirmTextIOS={I18n.t('components.form_components.date_input.confirm')}
          // cancelTextIOS={I18n.t('components.form_components.date_input.cancel')}
          onConfirm={this.onChangeDate}
          onCancel={() => this.setState({ isPickerVisible: false })}
        />
      </View>
    )
  }
}

export default Selector
