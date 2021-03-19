import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { IconProps, IconType } from '../CommonTypes'
import { StyleSheet } from 'react-native'

const Icon: IconType = ({ style = {}, testID }: IconProps) => {
  const color = StyleSheet.flatten(style).color?.toString() || '#000'
  return (
    <Svg testID={testID} style={style} viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <G fill={color} fillRule="nonzero" stroke="none" strokeWidth="1">
          <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm4.707 4.293c.36.36.388.928.083 1.32l-.083.094-5 5-.024.023-.04.036.064-.059c-.036.036-.073.068-.113.097-.017.013-.035.026-.054.038l-.045.027-.056.03c-.02.01-.042.02-.064.028l-.038.015c-.022.007-.044.015-.066.02l-.06.016-.054.01-.059.007-.069.005h-.039c-.025 0-.05-.002-.076-.004-.017 0-.032-.003-.048-.005-.023-.003-.047-.007-.07-.012-.017-.003-.034-.007-.05-.012-.021-.005-.041-.011-.061-.018-.018-.006-.037-.012-.055-.02l-.061-.026-.023-.012-.03-.015-.047-.028-.024-.016-3-2c-.46-.306-.583-.927-.277-1.387.284-.426.84-.564 1.286-.336l.1.059 2.318 1.544 4.42-4.42c.391-.39 1.025-.39 1.415 0z" />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
