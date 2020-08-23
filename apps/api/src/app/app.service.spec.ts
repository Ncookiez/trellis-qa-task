import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

/* Unit Testing */

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  // Testing getData():
  describe('getData', () => {
    it('should return todos', () => {
      expect(service.getData()).toEqual(service.todos);
    });
  });

  // Testing addTodo({ title }):
  describe('addTodo', () => {
    it('should return todoToAdd', () => {
      expect(service.addTodo({ title: 'Testing' })).toEqual(service.todos[1]);
    });
    it('should return null todoToAdd', () => {
      expect(service.addTodo({ title: '' })).toEqual({ title: null, completed: null });
    });
    it('should not append todos', () => {
      var todosSize = service.todos.length;
      service.addTodo({ title: '' })
      expect(service.todos.length).toEqual(todosSize);
    });
  });

  // Testing toggleCompleted(id):
  describe('toggleCompleted', () => {
    it('should toggle item completion"', () => {
      var status = service.todos[0].completed;
      service.toggleCompleted(1);
      expect(service.todos[0].completed).toEqual(!status);
    });
  });

  // Testing deleteTodo(id):
  describe('deleteTodo', () => {
    it('should delete todo', () => {
      var todosSize = service.todos.length;
      service.deleteTodo(1);
      expect(service.todos.length).toEqual(todosSize - 1);
    });
    it('should not delete todo', () => {
      var todosSize = service.todos.length;
      service.deleteTodo(0);
      expect(service.todos.length).toEqual(todosSize);
    });
  });

});