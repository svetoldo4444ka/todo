import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';

export class TasksService {
  public tasks: Task[] = [];
  changeListTasks = new Subject<Task[]>();
  changeListLength = new Subject<number>();
  // complitedProperty = new Subject<boolean>();
  changingTasks= [];
  counter: number = this.tasks.length;
  constructor() {}

  // getComplitedProperty() {
  //   this.
  // }
  // ***
  filterValues(value?: boolean) {
    if (typeof value !== 'undefined') {
      return this.changingTasks = this.tasks.filter((item) => item.completed === value);
    }
    return this.tasks;
  }
  getTasks(value?) {
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
  getVal(isChecked) {
    for (const task of this.tasks){
      if (task.completed) {
        isChecked = true;
        break;
      }
      isChecked = false;
    }
    return isChecked;
  }
  toggleComplited(isChecked: boolean): boolean {
    const val = this.getVal(isChecked);
    console.log(isChecked);
    // this.changingTasks = this.filterValues(!val);
    // this.changeListLength.next(this.changingTasks.length);
    for (const task of this.tasks){
      if (!val) {
        task.completed = true;
      } else {
        task.completed = false;
      }
    }
    return val;
    // console.log(value);
    // if (value) {
    //   for (const task of this.tasks){
    //     task.completed = true;
    //   }
    // } else {
    //   for (const task of this.tasks){
    //     task.completed = false;
    //   }
    // }
    // this.changingTasks = this.filterValues(false);
    // this.changeListLength.next(this.changingTasks.length);
  }
  updateCounter(id) {
    const idTask = id;
    let taskProp;
    for (const task of this.tasks){
      if (task.id === id) {
        task.completed = !task.completed;
        taskProp = task.completed;
      }
    }
    // this.getTasks(!taskProp);
    this.changeListLength.next((this.filterValues(false)).length);
  }
}


