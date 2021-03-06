import { Component } from 'react'
import { AppState, AppStateStatus } from 'react-native'
import { AppStateHandlerViewProps, AppStateHandlerViewState } from './View.Types'

class AppStateHandlerView extends Component<AppStateHandlerViewProps, AppStateHandlerViewState> {
  constructor(props: AppStateHandlerViewProps) {
    super(props)
    this.state = {
      appState: AppState.currentState,
    }
    this.executeOnActive = this.executeOnActive.bind(this)
    this.handleAppStateChange = this.handleAppStateChange.bind(this)
  }

  componentDidMount() {
    this.executeOnActive()
    AppState.addEventListener('change', this.handleAppStateChange)
  }

  componentDidUpdate() {
    this.executeOnActive()
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange(nextAppState: AppStateStatus) {
    this.setState({ appState: nextAppState })
  }

  executeOnActive() {
    if (this.state.appState === 'active') {
      this.props.onGoingForeground()
    }
  }

  render() {
    return null
  }
}

export default AppStateHandlerView
