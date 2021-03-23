import * as React from 'react'
import * as ROUTE from './route_constants'
import { CustomNavigationContainer } from 'support/navigation/handler/view'

export const customNavigationRef = React.createRef<CustomNavigationContainer>()

export function navigateTo(routeName: string, params?: object) {
  customNavigationRef.current?.navigateTo(routeName, undefined, params)
}

export function getCurrentPath() {
  return customNavigationRef.current?.getCurrentRoute()
}

export function goBack() {
  customNavigationRef.current?.goBack()
}

export function goToHome(): any {
  navigateTo(ROUTE.HOME)
}

export function goToRoutine(routineId?: number): any {
  navigateTo(ROUTE.ROUTINE, { routineId: routineId })
}

export function goToTask(taskId?: number): any {
  navigateTo(ROUTE.TASK, { taskId: taskId })
}

export function goToSettings(): any {
  navigateTo(ROUTE.SETTINGS)
}
