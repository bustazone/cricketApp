import View from './view'
import { withSafeArea } from 'support/helpers/safe_area_hoc'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { TaskViewEventProps, TaskViewInputProps } from './view.types'
import { TaskOwnPropsType } from './index.type'
import { RootState } from 'reducers'
import { ThunkDispatch } from 'redux-thunk'

const mapStateToProps: MapStateToProps<TaskViewInputProps, TaskOwnPropsType, RootState> = (
  state,
  ownProps,
): TaskViewInputProps => ({
  task: state.tasks.find(it => it.id === ownProps.route?.params?.taskId),
})

const mapDipatchToProps: MapDispatchToPropsFunction<TaskViewEventProps, TaskOwnPropsType> = (
  _dispatch: ThunkDispatch<any, any, any>,
  _ownProps,
): TaskViewEventProps => ({})

export default withSafeArea(connect(mapStateToProps, mapDipatchToProps)(View))
