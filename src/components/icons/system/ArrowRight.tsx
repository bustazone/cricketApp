import React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import { IconProps, IconType } from '../CommonTypes'
import { StyleSheet } from 'react-native'

const Icon: IconType = ({ style = {}, testID }: IconProps) => {
  const color = StyleSheet.flatten(style).color?.toString() || '#000'
  return (
    <Svg testID={testID} style={style} viewBox="0 0 24 24">
      <G fill="none" fillRule="evenodd">
        <G fill={color} fillRule="nonzero">
          <Path d="M7.293 3.293c.36-.36.928-.388 1.32-.083l.094.083 8 8c.36.36.388.928.083 1.32l-.083.094-8 8c-.39.39-1.024.39-1.414 0-.36-.36-.388-.928-.083-1.32l.083-.094L14.585 12 7.293 4.707c-.36-.36-.388-.928-.083-1.32l.083-.094z" />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
