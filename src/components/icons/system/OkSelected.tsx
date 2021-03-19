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
          <Path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm4.707 5.293c-.39-.39-1.024-.39-1.414 0l-4.421 4.419-2.317-1.544-.101-.06c-.446-.227-1.002-.09-1.286.337-.306.46-.182 1.08.277 1.387l3 2 .024.016.048.028.03.015.022.012c.02.01.04.018.061.026l.055.02.06.018.05.012.036.007.035.005.048.005c.025.002.05.004.076.004h.039l.07-.005.058-.007.054-.01.06-.015c.024-.007.047-.014.07-.023l.03-.011c.025-.01.049-.02.073-.033l.05-.026.047-.029c.017-.01.034-.022.05-.034.04-.03.08-.063.116-.1l-.021.019-.035.033.036-.032.02-.02 5-5 .083-.094c.305-.392.278-.96-.083-1.32z" />
        </G>
      </G>
    </Svg>
  )
}

export default Icon
