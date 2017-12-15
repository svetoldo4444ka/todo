/* tslint:disable:no-unused-variable */

import { TestBed} from '@angular/core/testing';
import { TasksService } from './tasks.service';
import {Task} from './task.model';

describe('TasksService', () => {
  let service: TasksService;
  const task = {
    id: 1,
    string: 'test task',
    completed: false
  };
  const tasks: Task[] = [
    {
      id: 1,
      name: 'test task',
      completed: false
    },
    {
      id: 2,
      name: 'test task',
      completed: true
    }
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TasksService
      ]
    });
    service = TestBed.get(TasksService);
  });
  // xit('should create the service', () => {
  //   service.changeListTasks.subscribe(datad => console.log('lalala:', data));
  //   service.addNewTask('123');
  // });

  // it('should delete task', () => {
  //   console.log('delete');
  //   service.deleteTask(1);
  //
  //   service.changeListTasks.subscribe(() => {
  //     expect(tasks.length).not.toEqual(2); } );
  // });

  // xit('should get complited task', () => {
  //   service.tasks = tasks;
  //   service.changeListTasks.subscribe(taskArray => {
  //     taskArray.forEach((item) => {
  //       expect(item.completed).not.toBeFalsy();
  //     });
  //   });
  //   service.getCompletedTasks();
  // });
  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
  it('should delete tasks', () => {
    service.tasks = tasks;
    const changeSpy = spyOn(service.changeListTasks, 'next').and.stub();
    spyOn(service, 'filterValues').and.returnValue([]);
    const listSpy = spyOn(service.changeListLength, 'next').and.stub();
    service.deleteTask(2);
    expect(service.tasks.length).toEqual(1);
    expect(changeSpy).toHaveBeenCalledWith(service.tasks);
    expect(listSpy).toHaveBeenCalledWith(0);
  });
  it('should add new task', () => {
    service.tasks = [];
    service.addNewTask('test', false);
    expect(service.tasks.length).not.toEqual(0);
  });
  it('should get completed tasks', () => {
    service.tasks = tasks;
    service.getCompletedTask();
    service.tasks.forEach((item) => {
      expect(item.completed).not.toBeTruthy();
    });
  });
  it('should update counter', () => {
    // service.tasks = tasks;
    // const changeSpy = spyOn(service.changeListTasks, 'next').and.stub();
    // service.updateCounter(1);

  });


/*








  deleteTask(id) {
    this.changingTasks = this.tasks.filter( (item, index) => index !== id);
    this.tasks = this.changingTasks;
    this.changeListTasks.next(this.tasks);
    changingTasks = this.filterValues(false);
    this.changeListLength.next(changingTasks.length);
    }

    deleteTask(id, tasks) {
    const t = tasks.filter( (item, index) => index !== id);
      this.changeListTasks.next(t);
    }

*/


  // xit('should add new task', () => {
  //   service.changeListTasks.subscribe(dataList => {
  //     expect('test task').toEqual( dataList[0].name ); } );
  //   service.addNewTask(data);
  // });
  // xit('should get active task', () => {
  //    service.tasks = tasks;
  //    service.changeListTasks.subscribe(taskArray => {
  //      taskArray.forEach((item) => {
  //        expect(item.completed).toBeFalsy();
  //      });
  //    });
  //     service.getActiveTask();
  // });
});
