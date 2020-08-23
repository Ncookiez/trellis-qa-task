import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';

/* Component Testing */
/* INCOMPLETE */

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Component should exist:
  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  // Component should have 'todos' input:
  it('should have todos input', () => {
    expect(component).toHaveProperty('todos', component.todos);
  });

  // Component should emit 'toggle' when appropriate:
  // it('should emit toggle', () => {
  //   spyOn(component.toggle, 'emit');
  //   var element = fixture.nativeElement;
  //   var item = element.querySelector('p');
  //   item.dispatchEvent(new Event('click')); // NOT WORKING WITHOUT MOCK JEST COMPONENT
  //   fixture.detectChanges;
  //   expect(component.toggle.emit).toHaveBeenCalledWith('todo');
  // });

  // Component should emit 'delete' when appropriate:
  // it('should emit delete', () => {
  //   //TODO
  // });

});