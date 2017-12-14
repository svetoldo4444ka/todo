/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TasksService } from '../../tasks.service';
import {AppTaskComponent} from './app-task.component';

class TaskServiceMock {
  updateCounter() {}
  deleteTask() {}
}
fdescribe('AppTaskComponent', () => {
  let component: AppTaskComponent;
  let fixture: ComponentFixture<AppTaskComponent>;
  let service: TaskServiceMock;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppTaskComponent],
      providers: [
        {provide: TasksService, useClass: TaskServiceMock}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(TasksService);
  }));
  it('should call updateCounter', () => {
    spyOn(service, 'updateCounter').and.stub();
    component.onUpdateCounter(1);
    expect(service.updateCounter).toHaveBeenCalledWith(1);
  });
  it('should call deleteTask', () => {
    spyOn(service, 'deleteTask');
    component.onDeleteTask(1);
    expect(service.deleteTask).toHaveBeenCalledWith(1);
  });
});
a
