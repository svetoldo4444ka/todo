import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';

export class TasksService {
  public tasks: Task[] = [];
  changeListTasks = new Subject<Task[]>();
  changeListLength = new Subject<number>();
  changingTasks= [];
  counter: number = this.tasks.length;
  constructor() {}

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
  toggleComplited(value) {
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
  }
  updateCounter(id) {
    for (const task of this.tasks){
      if (task.id === id) {
        task.completed = !task.completed;
      }
    }
    this.changingTasks = this.filterValues(false);
    this.changeListLength.next(this.changingTasks.length);
  }
}


