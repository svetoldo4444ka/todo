import { Action } from '@ngrx/store';
import { Task } from '../shared/task.model';

export const ADD_TASK = 'ADD_TASK';

export class AddTasks implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task) {}
}
export type AppTasksListActions = AddTasks;
