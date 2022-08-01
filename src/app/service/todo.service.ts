import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Todo} from './../model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  constructor() { 
    this.todos = [
      {
        id: '111',
        title: 'Learn ANgular',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '112',
        title: 'Learn Node',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '113',
        title: 'Learn RXjs',
        isComplete: true,
        date: new Date(),
      },
      {
        id: '114',
        title: 'Learn Spring boot',
        isComplete: false,
        date: new Date(),
      },
    ];
  }

getTodos(){
  return of(this.todos);
}

addTodo(todo: Todo){
  this.todos.push(todo)
}

changeStatus(todo: Todo){
  this.todos.map( singleTodo => {
    if(singleTodo.id == todo.id){
      todo.isComplete = !todo.isComplete;
    }
  })
}

delete(todo: Todo){
  const indexofTodo = this.todos.findIndex(
    (currentObj) => currentObj.id === todo.id
  );
  this.todos.splice(indexofTodo, 1);
}


}