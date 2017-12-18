import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';

export class TasksService {
  public tasks: Task[] = [];
  changeListTasks = new Subject<Task[]>();
  changeListLength = new Subject<number>();
  changingTasks= [];
  listState: string;
  counter: number = this.tasks.length;
  constructor() {}

  filterValues(value?: boolean) {
    if (typeof value !== 'undefined') {
      return this.changingTasks = this.tasks.filter((item) => item.completed === value);
    }
    return this.tasks;
  }
  getTasks(clickedButton, value?) {
    this.listState = clickedButton;
    this.changeListTasks.next(this.filterValues(value));
  }
  addNewTask(value: string, valueIsCompleted) {
    this.tasks.push(new Task(this.tasks.length, value, valueIsCompleted));
    this.changeListTasks.next(this.tasks);
    this.changeListLength.next(this.filterValues(valueIsCompleted).length);
  }
  getCompletedTask() {
    this.changingTasks = this.filterValues(false);
    this.tasks = this.changingTasks;
    this.changeListTasks.next(this.tasks);
  }
  deleteTask(id) {
    this.tasks = this.tasks.filter( (item) => item.id !== id);
    this.changeListTasks.next(this.tasks);
    const changingTasks = this.filterValues(false);
    this.changeListLength.next(changingTasks.length);
  }
  getTasksValue(isChecked: boolean): boolean {
    for (const task of this.tasks){
      if (task.completed === isChecked) {
        return isChecked = !isChecked;
      } else {
        return isChecked;
      }
    }
  }
  toggleComplited(isChecked: boolean): boolean {
    const value = this.getTasksValue(isChecked);
    if (value) {
      for (const task of this.tasks){
        task.completed = true;
      }
    } else {
      for (const task of this.tasks){
        task.completed = false;
      }
    }
    this.changingTasks = this.filterValues(false);
    this.changeListLength.next(this.changingTasks.length);
    return value;
  }
  checkCompleted() {
    if (this.tasks.length === 0) { return false; }
    return this.tasks.every((task) => task.completed === true);
  }
  updateCounter(id) {
    let taskProp;
    for (const task of this.tasks){
      if (task.id === id) {
        task.completed = !task.completed;
        taskProp = task.completed;
      }
    }
    this.checkCompleted();
    if (this.listState === 'active') {
      this.getTasks(this.listState, false);
    } else if (this.listState === 'complited') {
      this.getTasks(this.listState, true);
    } else {
      this.getTasks(this.listState);
    }
    this.changeListLength.next((this.filterValues(false)).length);
  }
}


