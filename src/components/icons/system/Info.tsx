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
          <Path d="M12 0c6.627 0 12 5.373 12 12 0 6.628-5.372 12-12 12S0 18.628 0 12C0 5.373 5.373 0 12 0zm0 2C6.477 2 2 6.478 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10zm0 14c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm0-9.904c.512 0 .935.386.993.883l.007.117v6.907c0 .552-.448 1-1 1-.513 0-.936-.386-.994-.884L11 14.003V7.096c0-.553.447-1 1-1z" />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
