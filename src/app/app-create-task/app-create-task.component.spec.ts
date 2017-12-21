/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCreateTaskComponent } from './app-create-task.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../shared/tasks.service';
import { By } from '@angular/platform-browser';

class TasksServiceMock {
  addNewTask() {}
  toggleComplited() {}
}
describe('AppCreateTaskComponent', () => {
  let component: AppCreateTaskComponent;
  let fixture:   ComponentFixture<AppCreateTaskComponent>;
  let service: TasksServiceMock;
  const isCompleted = false;
  const testString = 'test string';
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCreateTaskComponent ],
      imports: [ FormsModule ],
      providers: [ {
        provide: TasksService,
        useClass: TasksServiceMock
      } ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppCreateTaskComponent); // create component and test fixture
    component = fixture.componentInstance; // get test component from the fixture
    fixture.detectChanges();
    service = TestBed.get(TasksService); // UserService provided to the TestBed
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppCreateTaskComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   service = TestBed.get(TasksService);
  // });
  it('has valid form', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'test';
    expect(input.value.length).not.toEqual(0);
  });
  it('should call addNewTask method', () => {
    console.log(1);
    spyOn(service, 'addNewTask').and.stub();
    component.onAddItem(testString);
    expect(service.addNewTask).toHaveBeenCalledWith(testString, isCompleted);
  });
  it('should call toggleComplited method', () => {
    spyOn(service, 'toggleComplited');
    component.onToggleComplited();
    expect(service.toggleComplited).toHaveBeenCalledWith(isCompleted);
  });
});
