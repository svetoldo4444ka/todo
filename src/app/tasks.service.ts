import { Task } from './task.model';
import { Subject } from 'rxjs/Subject';


export class TasksService {
  private tasks: Task[] = [];
  changeListTasks = new Subject<Task[]>();
  changeListLength = new Subject<number>();
  changingTasks= [];
  counter: number = this.tasks.length;
  constructor(){}
  deleteTask(id) {
    this.changingTasks = this.tasks.filter( (item, index) => index !== id);
    this.tasks = this.changingTasks;
    this.changeListTasks.next(this.tasks);
    this.changingTasks = this.tasks.filter((item) => item.completed === false);
    this.changeListLength.next(this.changingTasks.length);
  }
  addNewTask(value: string) {
    this.tasks.push(new Task(this.tasks.length, value, false));
    this.changeListTasks.next(this.tasks);
    this.changingTasks = this.tasks.filter((item) => item.completed === false);
    this.changeListLength.next(this.changingTasks.length);

  }
  getActiveTask()  {
    this.changingTasks = this.tasks.filter((item) => item.completed !== true);
    this.changeListTasks.next(this.changingTasks);
  }
  getAllTask() {
    this.changeListTasks.next(this.tasks);
  }
  getCompletedTasks() {
    this.changingTasks = this.tasks.filter((item) => item.completed === true);
    this.changeListTasks.next(this.changingTasks);
  }
  getCompletedTask() {
    this.changingTasks = this.tasks.filter((item) => item.completed === false);
    this.tasks = this.changingTasks;
    this.changeListTasks.next(this.tasks);
  }
  changeTask(value, id) {
   this.tasks.map((item, index) => {
     if (index === id) {
       item.name = value;
     }
   });
    this.changeListTasks.next(this.tasks);
  }
  toggleComplited(value) {
    if (value) {
      for (let task of this.tasks){
        task.completed = true;
      }
    } else {
      for (let task of this.tasks){
        task.completed = false;
      }
    }
    this.changingTasks = this.tasks.filter((item) => item.completed === false);
    this.changeListLength.next(this.changingTasks.length);
  }
  updateCounter(id) {
    for (let task of this.tasks){
      if (task.id === id) {
        task.completed = !task.completed;
      }
    }
    this.changingTasks = this.tasks.filter((item) => item.completed === false);
    this.changeListLength.next(this.changingTasks.length);
  }
}

