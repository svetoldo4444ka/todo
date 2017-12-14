import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { Task } from '../../task.model';
import { NgForm } from '@angular/forms';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './app-task.component.html',
  styleUrls: ['./app-task.component.css']
})
export class AppTaskComponent implements OnInit {
  @Input() newTask: Task;
  showInput = false;
  @ViewChild('createItem') form: NgForm;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {

  }
  onDeleteTask(id) {
    this.tasksService.deleteTask(id);
  }

  // onSwitchElement() {
  //   this.showInput = true;
  // }
  // onChangeValue(form: NgForm, id: number) {
  //   this.tasksService.changeTask(form.value.name, id);
  //   this.showInput = false;
  // }
  onUpdateCounter(id) {
    this.tasksService.updateCounter(id);
  }
}
