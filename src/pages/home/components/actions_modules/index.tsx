import { GestureResponderEvent, Platform, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { H, W } from 'utils/screen_dimensions'
import Svg, { Path } from 'react-native-svg'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import SettingsComponent from 'pages/home/components/settings'
import TasksComponent from 'pages/home/components/tasks'
import { ActionModulesPropsType } from 'pages/home/components/actions_modules/index.type'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styles from './view.styles'

const animationOptions = { damping: 15, stiffness: 300 }
let firstInteractionYPosition: number = 0
let lastInteractionYPosition: number = 0
const ActionModules = (_props: ActionModulesPropsType) => {
  const safeAreaInsets = useSafeAreaInsets()
  const [outPanel, setOutPanel] = useState<boolean>(false)
  const [globalBoxNone, setGlobalBoxNone] = useState<boolean>(true)
  const startingPosition = H - safeAreaInsets.bottom - safeAreaInsets.top - 70 + 18
  const finishPosition = 70
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
  function onResponderStart(e: GestureResponderEvent) {
    setGlobalBoxNone(false)
    firstInteractionYPosition = e.nativeEvent.pageY
    lastInteractionYPosition = e.nativeEvent.pageY
  }
  function onResponderMove(side: 'L' | 'R') {
    return (e: GestureResponderEvent) => {
      if (side === 'R') {
        yR.value = yR.value + (e.nativeEvent.pageY - lastInteractionYPosition)
      } else {
        yL.value = yL.value + (e.nativeEvent.pageY - lastInteractionYPosition)
      }
      lastInteractionYPosition = e.nativeEvent.pageY
    }
  }
  function onResponderRelease(side: 'L' | 'R') {
    return () => {
      if (outPanel) {
        if (Math.abs(lastInteractionYPosition - firstInteractionYPosition) > 100) {
          if (side === 'R') {
            yR.value = withSpring(startingPosition, animationOptions)
          } else {
            yL.value = withSpring(startingPosition, animationOptions)
          }
          setOutPanel(false)
          setGlobalBoxNone(true)
        } else {
          if (side === 'R') {
            yR.value = withSpring(finishPosition, animationOptions)
          } else {
            yL.value = withSpring(finishPosition, animationOptions)
          }
        }
      } else {
        if (Math.abs(lastInteractionYPosition - firstInteractionYPosition) > 100) {
          if (side === 'R') {
            yR.value = withSpring(finishPosition, animationOptions)
            yL.value = withSpring(startingPosition, animationOptions)
          } else {
            yL.value = withSpring(finishPosition, animationOptions)
            yR.value = withSpring(startingPosition, animationOptions)
          }
          setOutPanel(true)
        } else {
          if (side === 'R') {
            yR.value = withSpring(startingPosition, animationOptions)
          } else {
            yL.value = withSpring(startingPosition, animationOptions)
          }
          setGlobalBoxNone(true)
        }
      }
    }
  }
  return (
    <View style={styles.container} pointerEvents={globalBoxNone ? 'box-none' : undefined}>
      <TouchableOpacity
        style={[
          styles.centralButtonContainer,
          { top: H - safeAreaInsets.bottom - safeAreaInsets.top - 70 },
        ]}
        onPress={() => {}}>
        <View style={styles.centralButton} />
      </TouchableOpacity>
      <Animated.View
        pointerEvents={'box-none'}
        style={[
          styles.sliderContainer,
          {
            height: H - safeAreaInsets.bottom - safeAreaInsets.top - 70,
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
            onResponderStart={onResponderStart}
            onResponderMove={onResponderMove('R')}
            onResponderRelease={onResponderRelease('R')}
          />
        </Svg>
        <View
          style={[
            styles.slidePanel,
            styles.settingsPanel,
            {
              height: H - safeAreaInsets.bottom - safeAreaInsets.top - 70,
            },
          ]}>
          <SettingsComponent />
        </View>
      </Animated.View>
      <Animated.View pointerEvents={'box-none'} style={[styles.sliderContainer, animatedStyleL]}>
        <Svg
          style={{ height: (W / 300) * 50, width: W }}
          viewBox="0 0 300 50"
          pointerEvents={Platform.OS === 'android' ? 'box-none' : undefined}>
          <Path
            d="M0 0 L110 0 S120 0 120 10 S120 40 150 40 L300 40 L300 50 L0 50 Z"
            fill="red"
            onStartShouldSetResponder={_e => true}
            onMoveShouldSetResponder={_e => true}
            onResponderStart={onResponderStart}
            onResponderMove={onResponderMove('L')}
            onResponderRelease={onResponderRelease('L')}
          />
        </Svg>
        <View
          style={[
            styles.slidePanel,
            styles.creationPanel,
            {
              height: H - safeAreaInsets.bottom - safeAreaInsets.top - 70,
            },
          ]}>
          <TasksComponent />
        </View>
      </Animated.View>
    </View>
  )
}

export default ActionModules
