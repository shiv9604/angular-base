import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Todo } from 'src/app/models/Todos/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private api: ApiService) {}

  public getTodos() {
    return this.api.get('https://dummyjson.com/todos');
  }

  public addTodo(todo: Todo) {
    return this.api.post('https://dummyjson.com/todos/add', todo);
  }

  public deleteTodo(id: number) {
    return this.api.delete(`https://dummyjson.com/todos/${id}`);
  }

  public updateTodo(data: Todo) {
    return this.api.put(`https://dummyjson.com/todos/${data.id}`, data);
  }
}
