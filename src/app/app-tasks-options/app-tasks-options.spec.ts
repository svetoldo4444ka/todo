/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTasksOptionsComponent } from './app-tasks-options.component';
import { TasksService } from '../shared/tasks.service';
import { Subject } from 'rxjs/Subject';

class TasksServiceMock {
  changeListLength = new Subject<number>();
  taskCounter: number;
  __releaseTaskLength(data: number) {
    this.changeListLength.next(data);
  }
}
describe('AppTasksOptionsComponent', () => {
  let component: AppTasksOptionsComponent;
  let fixture: ComponentFixture<AppTasksOptionsComponent>;
  let service: TasksServiceMock;
  let value = false;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTasksOptionsComponent ],
      providers: [{
        provide: TasksService,
        useClass: TasksServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTasksOptionsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TasksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  xit('should emit data', () => {
    const taskLength = 5;
    service.__releaseTaskLength(taskLength);
    expect(service.taskCounter).toEqual(taskLength);
  });
  // it('should call onGetActiveTask', () => {
  //   spyOn(service, 'getActiveTask');
  //   component.onGetActiveTask();
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should call onGetAllTask', () => {
  //   const spy = spyOn(tasksService, 'getAllTask');
  //   component.onGetAllTask();
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should call onGetCompletedTasks', () => {
  //   const spy = spyOn(tasksService, 'getCompletedTasks');
  //   component.onGetCompletedTasks();
  //   expect(spy).toHaveBeenCalled();
  // });
  // it('should call onGetCompletedTask', () => {
  //   const spy = spyOn(tasksService, 'getCompletedTask');
  //   component.onGetCompletedTask();
  //   expect(spy).toHaveBeenCalled();
  // });
});
