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
  selected: string;
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
  onGetActiveTasks(val): void {
    this.selected = val;
    const clickedButton = 'active';
    this.tasksService.getTasks(clickedButton, this.value);
  }
  onGetCompletedTasks(val): void {
    this.selected = val;
    const clickedButton = 'complited';
    this.tasksService.getTasks(clickedButton, !this.value);
  }
  onGetAllTask(val): void {
    this.selected = val;
    const clickedButton = 'all';
    this.tasksService.getTasks(clickedButton);
  }
  onGetCompletedTask(): void {
    this.tasksService.getCompletedTask();
  }
  isActive(val) {
    return this.selected === val;
  }
}
