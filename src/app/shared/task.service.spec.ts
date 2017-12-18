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
      completed: false
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
  it('should checkCompleted values', () => {
    service.tasks = tasks;
    const value = service.checkCompleted();
    expect(value).toBeFalsy();
  });
});
