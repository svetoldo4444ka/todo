import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.css']
})
export class AppCreateTaskComponent implements OnInit {
  task: Task;
  isChecked = false;
  isCompleted = false;
  @ViewChild('createItem') form: NgForm;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  onAddItem(value) {
    this.tasksService.addNewTask(value.value, this.isCompleted);
    this.form.reset();
  }
  onToggleComplited(id) {
    this.isChecked = !this.isChecked;
    this.tasksService.toggleComplited(this.isChecked);
  }
}
