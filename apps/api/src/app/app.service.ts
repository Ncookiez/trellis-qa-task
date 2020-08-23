import { Injectable } from '@nestjs/common';
import { Todo } from '@trellis/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ id: 1, title: 'Test', completed: false }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo({ title }) {
    const todoToAdd = title.length ? {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false,
    } : { title: null, completed: null };

    console.log(todoToAdd)

    // Fixed - 'todos' will not be appended if title length < 1:
    if(title.length) { this.todos.push(todoToAdd); }
    // This has also been tested in the API to avoid regression.

    return todoToAdd;
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== Number(id));

    return this.todos;
  }

  toggleCompleted(id) {
    this.todos.forEach((element, index) => {
      if (element.id === id) {
        this.todos[index] = {
          ...this.todos[index],
          completed: !this.todos[index].completed
        };
      }
    });

    return this.todos;
  }
}