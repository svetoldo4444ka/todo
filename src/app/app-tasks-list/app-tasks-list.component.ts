import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './app-tasks-list.component.html',
  styleUrls: ['./app-tasks-list.component.css']
})
export class AppTasksListComponent implements OnInit {
  tasks: Task[];
  counter: number = this.tasksService.counter;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.changeListTasks
      .subscribe(
        (tasks: Task[])  => {
          this.tasks = tasks;
        }
      );

  }
}
