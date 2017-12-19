import * as AppTasksListActions from './app-tasks-list.actions';
import { Action } from '@ngrx/store';
import { Task } from '../shared/task.model';

const initialTask = {
  tasks: [
    new Task(0, 'initial task', false),
    new Task(1, 'initial task 2', false)
  ]
};
export function appTasksListReducer(state = initialTask, action: AppTasksListActions.AppTasksListActions) {
  switch(action.type) {
    case AppTasksListActions.ADD_TASK:
      return  {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
}
