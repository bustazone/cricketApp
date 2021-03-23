import View from './view'
import { withSafeArea } from 'support/helpers/safe_area_hoc'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { RootState } from 'reducers'
import { ThunkDispatch } from 'redux-thunk'
import { RoutineViewEventProps, RoutineViewInputProps } from 'pages/create_edit_routine/view.types'
import * as Navigate from 'support/navigation/service'
import { RoutineOwnPropsType } from 'pages/create_edit_routine/index.type'

const mapStateToProps: MapStateToProps<RoutineViewInputProps, RoutineOwnPropsType, RootState> = (
  state,
  ownProps,
): RoutineViewInputProps => ({
  routine: state.routines.find(it => it.id === ownProps.route?.params?.routineId),
  tasks: state.tasks,
})

const mapDipatchToProps: MapDispatchToPropsFunction<RoutineViewEventProps, RoutineOwnPropsType> = (
  _dispatch: ThunkDispatch<any, any, any>,
  _ownProps,
): RoutineViewEventProps => ({
  goToTask: (taskId: number | undefined) => {
    Navigate.goToTask(taskId)
  },
})

export default withSafeArea(connect(mapStateToProps, mapDipatchToProps)(View))
