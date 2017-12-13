import { Component, OnInit } from '@angular/core';
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
  isChecked: boolean = false;
  form: NgForm;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
  }
  onAddItem(form) {
    this.tasksService.addNewTask(form.value.name);
    console.log(form.invalid);
    form.reset();
  }
  onToggleComplited(id) {
    this.isChecked = !this.isChecked;
    this.tasksService.toggleComplited(this.isChecked);
  }
}
