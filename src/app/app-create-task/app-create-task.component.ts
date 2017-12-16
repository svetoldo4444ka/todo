import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../shared/task.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.css']
})
export class AppCreateTaskComponent {
  task: Task;
  isChecked: any = false;
  isCompleted = true;
  @ViewChild('createItem') form: NgForm;
  constructor(private tasksService: TasksService) { }

  onAddItem(element) {
    this.tasksService.addNewTask(element.value, !this.isCompleted);
    element.value = '';
  }
  onToggleComplited() {
    this.tasksService.toggleComplited(this.isChecked);
  }
}
