import React from 'react'
import { View, Text } from 'react-native'
import TouchableFlatItem from '../touchable_flat_item/View'
import { TouchableFlatListViewProps } from './View.Types'
import styles from './View.Styles'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const TouchableFlatList = ({ ...props }: TouchableFlatListViewProps) => {
  if (props.dataList) {
    return (
      <View style={[styles.flatListContainer, props.style]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={props.onClose} style={styles.buttonCloseContainer}>
            <Text style={styles.buttonCloseIcon}>x</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollContainer} keyboardShouldPersistTaps="always">
          {props.dataList.map((item, index) => (
            <TouchableFlatItem
              key={item}
              item={item}
              last={index === props.dataList!.length - 1}
              onPressItem={props.onPressItem}
            />
          ))}
        </ScrollView>
      </View>
    )
  } else {
    return null
  }
}

export default TouchableFlatList
