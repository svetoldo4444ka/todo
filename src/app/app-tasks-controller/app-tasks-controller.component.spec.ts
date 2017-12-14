/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppTasksControllerComponent } from './app-tasks-controller.component';
import { TasksService } from '../tasks.service';
import {AppCreateTaskComponent} from '../app-create-task/app-create-task.component';

describe('AppTasksControllerComponent', () => {
  let component: AppTasksControllerComponent;
  let fixture: ComponentFixture<AppTasksControllerComponent>;
  let tasksService: TasksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTasksControllerComponent ],
      providers: [ TasksService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTasksControllerComponent);
    component = fixture.componentInstance;
    tasksService = TestBed.get(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call onGetActiveTask', () => {
    const spy = spyOn(tasksService, 'getActiveTask');
    component.onGetActiveTask();
    expect(spy).toHaveBeenCalled();
  });
  it('should call onGetAllTask', () => {
    const spy = spyOn(tasksService, 'getAllTask');
    component.onGetAllTask();
    expect(spy).toHaveBeenCalled();
  });
  it('should call onGetCompletedTasks', () => {
    const spy = spyOn(tasksService, 'getCompletedTasks');
    component.onGetCompletedTasks();
    expect(spy).toHaveBeenCalled();
  });
  it('should call onGetCompletedTask', () => {
    const spy = spyOn(tasksService, 'getCompletedTask');
    component.onGetCompletedTask();
    expect(spy).toHaveBeenCalled();
  });
});
