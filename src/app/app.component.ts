import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Todo } from './todo';
// Import class so we can use it as dependency 
//  injection token in the constructor
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'todo-app';

  newTodo: Todo = new Todo();

  private todoDataService: TodoDataService;
  constructor(todoDataService:TodoDataService){
    this.todoDataService = todoDataService;
  }

 

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }
}
