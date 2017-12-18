/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TasksService } from '../shared/tasks.service';
import { AppTasksListComponent } from './app-tasks-list.component';
import { Subject } from 'rxjs/Subject';
import { Task } from '../shared/task.model';

class TaskServiceMock {
  changeListTasks = new Subject<Task[]>();
  __releaseList(data: any) {
    this.changeListTasks.next(data);
  }
}

describe('AppTasksListComponent', () => {
  let component: AppTasksListComponent;
  let fixture: ComponentFixture<AppTasksListComponent>;
  let service: TaskServiceMock;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTasksListComponent ],
      providers: [ {
        provide: TasksService,
        useClass: TaskServiceMock
      } ],
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
  it('', () => {
    const taskToSend = [new Task(1, 'name', false), new Task(2, 'name2', false)];
    service.__releaseList(taskToSend);
    expect(component.tasks).toEqual(taskToSend);
  });
});
