import View from './view'
import { withSafeArea } from 'support/helpers/safe_area_hoc'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { RootState } from 'reducers'
import { ThunkDispatch } from 'redux-thunk'
import { HomeViewEventProps, HomeViewInputProps } from 'pages/home/view.types'
import { HomeViewOwnProps } from 'pages/home/index.types'

const mapStateToProps: MapStateToProps<HomeViewInputProps, HomeViewOwnProps, RootState> = (
  state,
  _ownProps,
): HomeViewInputProps => ({
  activeTasks: state.ActiveTasks,
})

const mapDipatchToProps: MapDispatchToPropsFunction<HomeViewEventProps, HomeViewOwnProps> = (
  _dispatch: ThunkDispatch<any, any, any>,
  _ownProps: HomeViewOwnProps,
): HomeViewEventProps => ({})

export default withSafeArea(connect(mapStateToProps, mapDipatchToProps)(View))
