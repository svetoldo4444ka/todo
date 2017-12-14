/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed} from '@angular/core/testing';
import { TasksService } from './tasks.service';
import {AppCreateTaskComponent} from './app-create-task/app-create-task.component';
import {Task} from './task.model';
import {forEach} from '@angular/router/src/utils/collection';

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
      completed: false
    }
  ];
  let data = 'test task';
  let valueComplited = true;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TasksService
      ]
    });
    service = TestBed.get(TasksService);
  });
  xit('should create the service', () => {
    service.changeListTasks.subscribe(datad => console.log('lalala:', data));
    service.addNewTask('123');
  });
  it('should create the service', () => {
    expect(service).toBeTruthy();
  });
  it('should add new task', () => {
    service.changeListTasks.subscribe(dataList => {
      expect('test task').toEqual( dataList[0].name ); } );
    service.addNewTask(data);
  });
  it('should get active task', () => {
     service.tasks = tasks;
     service.changeListTasks.subscribe(taskArray => {
       taskArray.forEach((item) => {
         expect(item.completed).toBeFalsy();
       });
     });
      service.getActiveTask();
  });
  it('should get complited task', () => {
    service.tasks = tasks;
    service.changeListTasks.subscribe(taskArray => {
      taskArray.forEach((item) => {
        expect(item.completed).not.toBeFalsy();
      });
    });
    service.getCompletedTasks();
  });
  it('should delete task', () => {
    service.deleteTask(1);
    service.changeListTasks.subscribe(() => {
      expect(tasks.length).not.toEqual(2); } );
  });
  it('should change value', () => {
    service.toggleComplited(valueComplited);
    service.changeListTasks.subscribe(() => {
      service.tasks.forEach((item) => {
        expect(item.completed).not.toBeFalsy();
      });
    });
  });
});
