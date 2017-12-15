import {Component, OnInit, Input} from '@angular/core';
import { Task } from '../../shared/task.model';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../shared/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './app-task.component.html',
  styleUrls: ['./app-task.component.css']
})
export class AppTaskComponent implements OnInit {
  @Input() newTask: Task;
  showInput = false;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {}
  onDeleteTask(id) {
    this.tasksService.deleteTask(id);
  }
  onUpdateCounter(id) {
    this.tasksService.updateCounter(id);
  }
}
