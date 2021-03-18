import View from './view'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from 'reducers'
import { TasksViewEventProps, TasksViewInputProps } from 'pages/home/components/tasks/view.types'
import { TasksViewOwnProps } from 'pages/home/components/tasks/index.types'

const mapStateToProps: MapStateToProps<TasksViewInputProps, TasksViewOwnProps, RootState> = (
  state,
  _ownProps,
): TasksViewInputProps => ({
  routines: state.routines,
  recurringTasks: state.ActiveTasks.filter(i => i.type === 'recurring'),
  uniqueTasks: state.ActiveTasks.filter(i => i.type === 'unique'),
  temporizerTasks: state.ActiveTasks.filter(i => i.type === 'temporizer'),
})

const mapDipatchToProps: MapDispatchToPropsFunction<TasksViewEventProps, TasksViewOwnProps> = (
  _dispatch: ThunkDispatch<any, any, any>,
  _ownProps: TasksViewOwnProps,
): TasksViewEventProps => ({
  newRoutine: () => {},
  newRecurringTask: () => {},
  newTemporizerTasks: () => {},
  newUniqueTasks: () => {},
})

export default connect(mapStateToProps, mapDipatchToProps)(View)
