import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { customNavigationRef } from '../service'
import RootNavigator from '../navigators'
import { NavigationHandlerViewProps, NavigationHandlerViewState } from './view.types'
import { NavigationContainerRef } from '@react-navigation/core'
// import * as Analytics from 'support/analytics'

export class CustomNavigationContainer extends Component<
  NavigationHandlerViewProps,
  NavigationHandlerViewState
> {
  private isMountedRef: boolean = false
  private routeNameRef: string | undefined
  private navigationRef = React.createRef<NavigationContainerRef>()

  getCurrentRoute() {
    return this.routeNameRef
  }

  navigateTo(routeName: string, stackName?: string, params?: object) {
    if (this.isMountedRef && this.navigationRef.current) {
      if (stackName)
        this.navigationRef.current?.navigate(stackName, {
          ...params,
          screen: routeName,
        })
      else this.navigationRef.current?.navigate(routeName, params)
    } else {
      // You can decide what to do if the app hasn't mounted
      // You can ignore this, or add these actions to a queue you can call later
    }
  }

  goBack(): any {
    this.navigationRef.current?.goBack()
  }

  render() {
    return (
      <NavigationContainer
        ref={this.navigationRef}
        onReady={() => {
          this.isMountedRef = true
        }}
        onStateChange={() => {
          const previousRouteName = this.routeNameRef
          const currentRouteName = this.navigationRef.current?.getCurrentRoute()?.name
          if (currentRouteName && previousRouteName !== currentRouteName) {
            // The line below uses the expo-firebase-analytics tracker
            // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
            // Change this line to use another Mobile analytics SDK
            // Analytics.setCurrentScreen(currentRouteName)
            console.log('Screen Changed to: ' + currentRouteName)
          }
          // Save the current route name for later comparision
          this.routeNameRef = currentRouteName
        }}>
        <RootNavigator {...this.props} />
      </NavigationContainer>
    )
  }
}

const NavigatorHandlerView = (props: NavigationHandlerViewProps) => {
  return <CustomNavigationContainer ref={customNavigationRef} {...props} />
}

export default NavigatorHandlerView
