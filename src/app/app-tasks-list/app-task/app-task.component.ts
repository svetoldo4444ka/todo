import * as AppTasksListActions from '../../store/app-tasks-list.actions';
import {Component, OnInit, Input} from '@angular/core';
import { Task } from '../../shared/task.model';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../shared/tasks.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-task',
  templateUrl: './app-task.component.html',
  styleUrls: ['./app-task.component.css']
})
export class AppTaskComponent implements OnInit {
  @Input() newTask: Task;
  constructor(private tasksService: TasksService, private store: Store<{tasksList: {tasks: Task[]}}>) { }

  ngOnInit() {}
  onDeleteTask(id) {
    //this.tasksService.deleteTask(id);
    this.store.dispatch(new AppTasksListActions.DeleteTask(id));
  }
  onUpdateCounter(id) {
    // this.tasksService.updateCounter(id);
    this.store.dispatch(new AppTasksListActions.ChangeStatus(id));
  }
}
