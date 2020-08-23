import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoInputComponent } from './todo-input.component';

/* Component Testing */

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Component should exist:
  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  // Component should emit 'newTodo' when button is clicked:
  it('should emit newTodo', () => {

    // Setting up elements:
    spyOn(component.newTodo, 'emit');
    var element = fixture.nativeElement;
    var textInput = element.querySelector('input');
    var newItem = element.querySelector('button');

    // Inputting mock data into input:
    textInput.value = 'testingItem';
    textInput.dispatchEvent(new Event('input'));
    newItem.dispatchEvent(new Event('click'));

    // Checking that output is as expected:
    fixture.detectChanges;
    expect(component.newTodo.emit).toHaveBeenCalledWith('testingItem');
    
  });

});