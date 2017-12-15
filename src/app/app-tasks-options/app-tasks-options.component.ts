import { Component, OnInit } from '@angular/core';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-tasks-options',
  templateUrl: './app-tasks-options.component.html',
  styleUrls: ['./app-tasks-options.component.css']
})
export class AppTasksOptionsComponent implements OnInit {
  taskCounter: number = this.tasksService.counter;
  value = false;
  constructor(private tasksService: TasksService) { }
  ngOnInit() {
    this.tasksService.changeListLength
      .subscribe(
        (number)  => {
          // controller
          this.taskCounter = number;
        }
      );
  }
  onGetActiveTasks(): void {
    this.tasksService.getTasks(this.value);
  }
  onGetCompletedTasks(): void {
    this.tasksService.getTasks(!this.value);
  }
  onGetAllTask(): void {
    this.tasksService.getTasks();
  }
  onGetCompletedTask(): void {
    this.tasksService.getCompletedTask();
  }
}
