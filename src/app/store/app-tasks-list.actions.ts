import { Action } from '@ngrx/store';
import { Task } from '../shared/task.model';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const GET_ACTIVE_TASKS = 'GET_ACTIVE_TASKS';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';

export class AddTasks implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: Task[]) {}

}
export class DeleteTask implements Action {
  readonly type = DELETE_TASK;

  constructor(public payload: number) {}

}
export class ChangeStatus implements Action {
  readonly type = CHANGE_STATUS;

  constructor(public payload: number) {}
}
export class GetActiveTasks implements Action {
  readonly type = GET_ACTIVE_TASKS;

  constructor(public payload: {clickedButton: string, value: boolean}) {}

}
export class GetAllTasks implements Action {
  readonly type = GET_ALL_TASKS;

  constructor(public payload: { clickedButton: string}) {
  }
}

export type AppTasksListActions =
  AddTasks |
  DeleteTask |
  ChangeStatus |
  GetAllTasks |
  GetActiveTasks;
