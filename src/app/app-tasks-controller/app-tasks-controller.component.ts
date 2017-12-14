import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-controller',
  templateUrl: './app-tasks-controller.component.html',
  styleUrls: ['./app-tasks-controller.component.css']
})
export class AppTasksControllerComponent implements OnInit {
  taskCounter: number = this.tasksService.counter;
  value = false;
  constructor(private tasksService: TasksService) { }
  ngOnInit() {
    this.tasksService.changeListLength
      .subscribe(
        (number)  => {
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
