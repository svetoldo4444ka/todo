import * as AppTasksListActions from '../store/app-tasks-list.actions';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../shared/task.model';
import { TasksService } from '../shared/tasks.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.css']
})
export class AppCreateTaskComponent {
  task: Task;
  isChecked: any = false;
  isCompleted = true;
  idTask = 2;
  @ViewChild('createItem') form: NgForm;
  constructor(public tasksService: TasksService, private store: Store<{tasksList: {tasks: Task[]}}>) { }
  onAddItem(element) {
    this.idTask = ++this.idTask;
    const newTask = new Task(this.idTask, element.value, !this.isCompleted);
    this.store.dispatch(new AppTasksListActions.AddTasks(newTask)); // this.tasksService.addNewTask(element.value, !this.isCompleted);
    element.value = '';
  }
  onToggleComplited() {
    this.tasksService.toggleComplited(this.isChecked);
  }
}
