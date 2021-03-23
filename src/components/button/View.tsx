import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './view.styles'
import { ButtonProps } from './view.types'
import { IconType } from 'components/icons/CommonTypes'

const Button = (props: ButtonProps) => {
  const renderIcon = (Icon?: IconType) => {
    if (Icon) {
      return <Icon style={[styles.iconBase]} />
    }
    return null
  }

  return (
    <TouchableOpacity
      testID={props.testID}
      style={[styles.containerBase, props.style]}
      disabled={props.disabled}
      onPress={props.onPress}>
      {renderIcon(props.leftIcon)}
      <Text style={[styles.labelBase]}>{props.label}</Text>
      {renderIcon(props.rightIcon)}
    </TouchableOpacity>
  )
}

export default Button
