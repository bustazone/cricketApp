import { Platform, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { W } from 'utils/screen_dimensions'
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import SettingsComponent from 'pages/home/components/settings'
import TasksComponent from 'pages/home/components/tasks'
import {ActionModulesPropsType} from "pages/home/components/actions_modules/index.type";

const animationOptions = { damping: 15, stiffness: 300 }
let firstInteractionYPosition: number = 0
let lastInteractionYPosition: number = 0
const ActionModules = (props: ActionModulesPropsType) => {
  const [height, setHeight] = useState<number>(0)
  const [outPanel, setOutPanel] = useState<boolean>(false)
  const [globalBoxNone, setGlobalBoxNone] = useState<boolean>(true)
  const startingPosition = 0
  // const finishPosition = ((-height * 3) / 4) - 70
  const finishPosition = -height + 70
  const yL = useSharedValue(startingPosition)
  const yR = useSharedValue(startingPosition)
  const animatedStyleL = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: yL.value,
        },
      ],
    }
  })
  const animatedStyleR = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: yR.value,
        },
      ],
    }
  })
  return (
    <View
      style={{ position: 'absolute', width: '100%', height: '100%', flex: 1 }}
      pointerEvents={globalBoxNone ? 'box-none' : undefined}
      onLayout={event => {
        setHeight(event.nativeEvent.layout.height)
      }}>
      <TouchableOpacity
        style={{ position: 'absolute', top: height - 70, alignSelf: 'center' }}
        onPress={() => {}}>
        <View style={{ backgroundColor: '#F00', width: 64, height: 64, borderRadius: 64 }} />
      </TouchableOpacity>
      <Animated.View
        pointerEvents={'box-none'}
        style={[
          {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: height - 70 + 18,
          },
          animatedStyleR,
        ]}>
        <Svg
          style={{ height: (W / 300) * 50, width: W }}
          viewBox={'0 0 300 50'}
          pointerEvents={Platform.OS === 'android' ? 'box-none' : undefined}>
          <Path
            d="M0 50 L300 50 L300 0 L190 0 S180 0 180 10 S180 40 150 40 L0 40 Z"
            fill="green"
            onStartShouldSetResponder={_e => true}
            onMoveShouldSetResponder={_e => true}
            onResponderStart={e => {
              setGlobalBoxNone(false)
              firstInteractionYPosition = e.nativeEvent.pageY
              lastInteractionYPosition = e.nativeEvent.pageY
            }}
            onResponderMove={e => {
              yR.value = yR.value + (e.nativeEvent.pageY - lastInteractionYPosition)
              lastInteractionYPosition = e.nativeEvent.pageY
            }}
            onResponderRelease={_e => {
              if (outPanel) {
                if (Math.abs(lastInteractionYPosition - firstInteractionYPosition) > 100) {
                  yR.value = withSpring(startingPosition, animationOptions)
                  setOutPanel(false)
                  setGlobalBoxNone(true)
                } else {
                  yR.value = withSpring(finishPosition, animationOptions)
                }
              } else {
                if (Math.abs(lastInteractionYPosition - firstInteractionYPosition) > 100) {
                  yR.value = withSpring(finishPosition, animationOptions)
                  yL.value = withSpring(startingPosition, animationOptions)
                  setOutPanel(true)
                } else {
                  yR.value = withSpring(startingPosition, animationOptions)
                  setGlobalBoxNone(true)
                }
              }
            }}
          />
        </Svg>
        <View
          style={[
            {
              width: '100%',
              height: height - (W / 300) * 50,
              position: 'relative',
              backgroundColor: 'green',
            },
          ]}>
          <SettingsComponent />
        </View>
        <View
          style={[
            {
              width: '100%',
              height: 50,
              backgroundColor: 'green',
            },
          ]}
        />
      </Animated.View>
      <Animated.View
        pointerEvents={'box-none'}
        style={[
          {
            width: '100%',
            height: height,
            position: 'absolute',
            top: height - 70 + 18,
          },
          animatedStyleL,
        ]}>
        <Svg
          style={{ height: (W / 300) * 50, width: W }}
          viewBox="0 0 300 50"
          pointerEvents={Platform.OS === 'android' ? 'box-none' : undefined}>
          <Path
            d="M0 0 L110 0 S120 0 120 10 S120 40 150 40 L300 40 L300 50 L0 50 Z"
            fill="red"
            onStartShouldSetResponder={_e => true}
            onMoveShouldSetResponder={_e => true}
            onResponderStart={e => {
              setGlobalBoxNone(false)
              firstInteractionYPosition = e.nativeEvent.pageY
              lastInteractionYPosition = e.nativeEvent.pageY
            }}
            onResponderMove={e => {
              yL.value = yL.value + (e.nativeEvent.pageY - lastInteractionYPosition)
              lastInteractionYPosition = e.nativeEvent.pageY
            }}
            onResponderRelease={_e => {
              if (outPanel) {
                if (Math.abs(lastInteractionYPosition - firstInteractionYPosition) > 100) {
                  yL.value = withSpring(startingPosition, animationOptions)
                  setOutPanel(false)
                  setGlobalBoxNone(true)
                } else {
                  yL.value = withSpring(finishPosition, animationOptions)
                }
              } else {
                if (Math.abs(lastInteractionYPosition - firstInteractionYPosition) > 100) {
                  yL.value = withSpring(finishPosition, animationOptions)
                  yR.value = withSpring(startingPosition, animationOptions)
                  setOutPanel(true)
                } else {
                  yL.value = withSpring(startingPosition, animationOptions)
                  setGlobalBoxNone(true)
                }
              }
            }}
          />
        </Svg>
        <View
          style={[
            {
              width: '100%',
              height: height - (W / 300) * 50,
              position: 'relative',
              backgroundColor: 'red',
            },
          ]}>
          <TasksComponent />
        </View>
        <View
          style={[
            {
              width: '100%',
              height: 50,
              backgroundColor: 'red',
            },
          ]}
        />
      </Animated.View>
    </View>
  )
}

export default ActionModules
