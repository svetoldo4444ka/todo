import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TasksService } from '../shared/tasks.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './app-tasks-list.component.html',
  styleUrls: ['./app-tasks-list.component.css']
})
export class AppTasksListComponent implements OnInit {
  tasksListState: Observable<{tasks: Task[]}>; // tasks: Task[];
  constructor(private tasksService: TasksService, private store: Store<{tasksList: {tasks: Task[]}}>) { }

  ngOnInit() {
    this.tasksListState = this.store.select('tasksList'); // this.tasks = this.tasksService.getInitialTask();
    // this.tasksService.changeListTasks
    //   .subscribe(
    //     (tasks: Task[])  => {
    //       this.tasks = tasks;
    //     }
    //   );
  }
}
