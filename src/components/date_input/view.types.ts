import { TextInputViewProps } from 'components/text_input/view.types'

export type DateInputViewTypes = 'date' | 'time' | 'datetime'
export type DateInputViewProps = {
  onDateChanged: (date: Date) => void
  inputFormat?: string
  value?: Date
  mode: DateInputViewTypes
} & Omit<
  TextInputViewProps,
  'onTextChange' | 'onTextChangeEnd' | 'type' | 'onFocus' | 'onBlur' | 'testID' | 'value'
>

export type DateInputViewState = {
  isPickerVisible: boolean
}
