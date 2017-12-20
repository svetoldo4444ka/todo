import * as AppTasksListActions from './app-tasks-list.actions';
import { Action } from '@ngrx/store';
import { Task } from '../shared/task.model';

const initialTask = {
  tasks: [
    new Task(1, 'initial task', false),
    new Task(2, 'initial task 2', false)
  ]
};
export function appTasksListReducer(state = initialTask, action: AppTasksListActions.AppTasksListActions) {
  console.log(state, action);
  switch(action.type) {
    case AppTasksListActions.ADD_TASK:
      return  {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case AppTasksListActions.DELETE_TASK:
      const taskList = [...state.tasks];
      const newTaskList = taskList.filter( (item) => item.id !== action.payload);
      return  {
        ...state,
        tasks: newTaskList
      };
    case AppTasksListActions.CHANGE_STATUS:
      const myTaskList = [...state.tasks];
      let taskProp;
      const idTask = action.payload;

      for (const task of myTaskList){
        if (task.id === idTask) {
          task.completed = !task.completed;
          taskProp = task.completed;
        }
      }

      return  {
        ...state,
        tasks: myTaskList
      };
    case AppTasksListActions.GET_ALL_TASKS:

      // const myAllState = [...state.tasks];

      // const ActiveTasksList = myState.filter( (item) => item.completed === action.payload.value);

      return  {
        ...state,
        tasks: state.tasks
      };
    case AppTasksListActions.GET_ACTIVE_TASKS:
      const myState = [...state.tasks];
      const ActiveTasksList = myState.filter( (item) => item.completed === action.payload.value).slice();

      return  {
        ...state,
        tasks: ActiveTasksList
      };

    default:
      return state;
  }
}
