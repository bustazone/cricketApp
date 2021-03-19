import { TextInputViewProps } from 'components/text_input/View.Types'

export type SelectorViewProps = {
  dataList?: string[]
  onValueChange: (item: string) => void
} & Omit<
  TextInputViewProps,
  'onTextChange' | 'onTextChangeEnd' | 'type' | 'onFocus' | 'onBlur' | 'testID'
>

export type SelectorViewState = {
  visible: boolean
}
