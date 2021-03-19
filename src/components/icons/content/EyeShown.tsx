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
          <Path d="M12.006 4l.346.007c3.574.126 7.082 2.018 10.52 5.617l.322.341c1.064 1.148 1.066 2.921.005 4.072-3.634 3.944-7.369 5.958-11.195 5.963-3.716.005-7.347-1.893-10.886-5.625l-.32-.343C-.258 12.883-.257 11.117.8 9.969 4.453 6.004 8.191 3.987 12.006 4zm-.007 2l-.299.004c-3.087.096-6.228 1.845-9.429 5.32-.352.383-.353.972-.006 1.349l.31.332C5.76 16.364 8.899 18.005 12 18c3.2-.005 6.44-1.751 9.728-5.318.353-.384.352-.975.003-1.352l-.31-.33c-3.199-3.347-6.337-4.99-9.423-5zM12 8c2.21 0 4 1.79 4 4 0 2.209-1.79 4-4 4s-4-1.791-4-4c0-2.21 1.79-4 4-4zm0 2c-1.105 0-2 .895-2 2 0 1.104.895 2 2 2s2-.896 2-2c0-1.105-.895-2-2-2z" />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
