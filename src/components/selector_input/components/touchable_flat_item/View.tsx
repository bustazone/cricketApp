import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { TouchableFlatItemViewProps } from './View.Types'
import styles from './View.Styles'

const TouchableFlatItem = ({ item, onPressItem, last }: TouchableFlatItemViewProps) => {
  return (
    <TouchableOpacity
      key={item}
      style={[styles.itemContainer, !last ? styles.itemContainerSeparator : {}]}
      onPress={() => onPressItem(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  )
}

export default TouchableFlatItem
