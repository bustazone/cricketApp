import { TextInputViewProps } from 'components/text_input/View.Types'

export type DateInputViewProps = {
  onDateChanged: (date: Date) => void
  inputFormat?: string
  value?: Date
} & Omit<
  TextInputViewProps,
  'onTextChange' | 'onTextChangeEnd' | 'type' | 'onFocus' | 'onBlur' | 'testID' | 'value'
>

export type DateInputViewState = {
  isPickerVisible: boolean
}
