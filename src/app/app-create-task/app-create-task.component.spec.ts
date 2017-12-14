/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCreateTaskComponent } from './app-create-task.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('AppCreateTaskComponent', () => {
  let component: AppCreateTaskComponent;
  let fixture:   ComponentFixture<AppCreateTaskComponent>;
  let tasksService: TasksService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCreateTaskComponent ],
      imports: [ FormsModule ],
      providers: [ TasksService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tasksService = TestBed.get(TasksService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has valid form', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'test';
    expect(input.value.length).not.toEqual(0);
  });

  it('call onAddItem() call tasksService.addNewTask', () => {
    // Arrange
    const spy = spyOn(tasksService, 'addNewTask');
    const value = '';
    // Act
    component.onAddItem(value);
    // Assert
    expect(spy).toHaveBeenCalled();
  });

  // it('call onToggleComplited() => toggle isChecked', () => {
  //   // Arrange
  //   const before = component.isChecked;
  //   // Act
  //   component.onToggleComplited();
  //   // Assert
  //   expect(component.isChecked).toBe(!before);
  // });

});
