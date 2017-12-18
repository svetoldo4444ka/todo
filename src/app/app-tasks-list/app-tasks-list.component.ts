import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TasksService } from '../shared/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './app-tasks-list.component.html',
  styleUrls: ['./app-tasks-list.component.css']
})
export class AppTasksListComponent implements OnInit {
  tasks: Task[];
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
