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
          <Path
            d="M20 0c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-2c0-.513.386-.936.883-.993L1 9c.552 0 1-.448 1-1 0-.513-.386-.936-.883-.993L1 7c-.552 0-1-.448-1-1V4c0-2.21 1.79-4 4-4h16zm0 2H4l-.15.005C2.817 2.082 2 2.945 2 4v1.17l.012.005C3.17 5.59 4 6.698 4 8l-.005.176c-.067 1.157-.79 2.138-1.802 2.577L2 10.83V12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zM8 11c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
            transform={'translate(0 4)'}
          />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
