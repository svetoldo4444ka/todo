import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import {Task} from '../shared/task.model';
import {Store} from '@ngrx/store';
import * as AppTasksListActions from '../store/app-tasks-list.actions';

@Component({
  selector: 'app-tasks-options',
  templateUrl: './app-tasks-options.component.html',
  styleUrls: ['./app-tasks-options.component.css']
})
export class AppTasksOptionsComponent implements OnInit {
  taskCounter: number = this.tasksService.counter;
  value = false;
  selected: string;
  constructor(private tasksService: TasksService, private store: Store<{tasksList: {tasks: Task[]}}>) { }
  ngOnInit() {
    this.tasksService.changeListLength
      .subscribe(
        (number)  => {
          // controller
          this.taskCounter = number;
        }
      );
  }
  onGetActiveTasks(val): void {
    this.selected = val;
    const clickedButton = 'active';
    // this.tasksService.getTasks(clickedButton, this.value);
    this.store.dispatch(new AppTasksListActions.GetActiveTasks({clickedButton: clickedButton, value: this.value));
  }
  onGetCompletedTasks(val): void {
    this.selected = val;
    const clickedButton = 'complited';
    this.tasksService.getTasks(clickedButton, !this.value);
  }
  onGetAllTask(val): void {
    this.selected = val;
    const clickedButton = 'all';
    // this.tasksService.getTasks(clickedButton);
    this.store.dispatch(new AppTasksListActions.GetAllTasks({clickedButton: clickedButton));
  }
  onGetCompletedTask(): void {
    this.tasksService.getCompletedTask();
  }
  isActive(val) {
    return this.selected === val;
  }
}
