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
            d="M12 3c.513 0 .936.386.993.883L13 4v7h7c.552 0 1 .448 1 1 0 .513-.386.936-.883.993L20 13h-7v7c0 .552-.448 1-1 1-.513 0-.936-.386-.993-.883L11 20v-7H4c-.552 0-1-.448-1-1 0-.513.386-.936.883-.993L4 11h7V4c0-.552.448-1 1-1z"
            transform={'rotate(45 12 12)'}
          />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
