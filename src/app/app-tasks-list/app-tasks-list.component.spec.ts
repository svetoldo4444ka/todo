/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { TasksService } from '../tasks.service';

import { AppTasksListComponent } from './app-tasks-list.component';

describe('AppTasksListComponent', () => {
  let component: AppTasksListComponent;
  let fixture: ComponentFixture<AppTasksListComponent>;
  let service: TasksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTasksListComponent ],
      providers: [ TasksService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTasksListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should subscribe on tasks list', () => {
    const lengthArray = service.tasks.length;
    service.changeListTasks.subscribe((tasks) => {
      console.log(tasks, service.tasks);
      service.tasks = tasks;
    });
    service.addNewTask('test');
    expect(service.tasks.length).not.toEqual(lengthArray);
  });
});
