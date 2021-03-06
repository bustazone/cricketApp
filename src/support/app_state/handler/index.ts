import { connect } from 'react-redux'
import AppStateHandlerView from './View'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppStateHandlerOwnProps } from './index.Types'

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AnyAction>,
  ownProps: AppStateHandlerOwnProps,
) => ({
  onGoingForeground: () => {
    dispatch(ownProps.onGoingForeground)
  },
})

const AppStateHandler = connect(null, mapDispatchToProps)(AppStateHandlerView)

export default AppStateHandler
