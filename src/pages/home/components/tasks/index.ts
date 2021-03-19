import View from './view'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'reducers'
import { TasksViewEventProps, TasksViewInputProps } from 'pages/home/components/tasks/view.types'
import { TasksViewOwnProps } from 'pages/home/components/tasks/index.types'
import * as Navigate from 'support/navigation/service'

const mapStateToProps: MapStateToProps<TasksViewInputProps, TasksViewOwnProps, RootState> = (
  state,
  _ownProps,
): TasksViewInputProps => ({
  routines: state.routines,
  recurringTasks: state.activeTasks.filter(i => i.type === 'recurring'),
  uniqueTasks: state.activeTasks.filter(i => i.type === 'unique'),
  temporizerTasks: state.activeTasks.filter(i => i.type === 'temporizer'),
})

const mapDipatchToProps: MapDispatchToPropsFunction<TasksViewEventProps, TasksViewOwnProps> = (
  _dispatch: ThunkDispatch<any, any, any>,
  _ownProps: TasksViewOwnProps,
): TasksViewEventProps => ({
  newRoutine: () => {
    Navigate.goToRoutine()
  },
  newRecurringTask: () => {},
  newTemporizerTasks: () => {},
  newUniqueTasks: () => {},
})

export default connect(mapStateToProps, mapDipatchToProps)(View)
