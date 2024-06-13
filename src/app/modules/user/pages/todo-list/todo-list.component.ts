import { Component, OnInit } from '@angular/core';
import { DateForTodoList } from 'src/app/models/Dates/date.mode';
import { Todo } from 'src/app/models/Todos/todo.model';
import * as moment from 'moment';
import { TodosService } from 'src/app/services/todos/todos.service';
import {
  TodoDeletedResponse,
  TodosResponse
} from 'src/app/models/Todos/todos-response.model';
import { LoaderService } from 'src/app/core/services/loader/loader.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  isEdit: Todo;
  today: DateForTodoList;
  todos: Todo[] = [];

  constructor(
    private todoService: TodosService,
    public loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.today = {
      day: moment().format('dddd'),
      date: moment().format('MMM D, YYYY')
    };
    this.getTodos();
  }

  public getTodos() {
    this.loaderService.showLoader();
    this.todoService.getTodos().subscribe((res: TodosResponse) => {
      console.log('Todos Fetched From server =>', res);
      this.todos = this.todos.concat(res.todos);
      this.loaderService.stopLoader();
    });
  }

  public add(task: string) {
    this.loaderService.showLoader();

    console.log('Add =>', task);
    this.todoService
      .addTodo({ todo: task, completed: false, userId: 1 })
      .subscribe((res: Todo) => {
        this.todos.push(res);
        console.log('Todo Added =>', res);
        this.loaderService.stopLoader();
      });
    // this.todos.push({ todo: task, completed: false });
  }

  public edit(editedValue: string) {
    this.loaderService.showLoader();
    this.todos.forEach((item, index) => {
      if (index === this.isEdit.index) {
        item.todo = editedValue;
        console.log('Updated todo =>', item);
        this.loaderService.stopLoader();
      }
    });
  }

  public onEdit(todo: Todo) {
    this.isEdit = { ...todo, index: this.todos.indexOf(todo) };
    console.log('Edit =>', this.isEdit);
  }

  public onDelete(todo: Todo) {
    if (confirm('Are you sure you want to delte selected todo')) {
      this.loaderService.showLoader();
      console.log('Delete =>', todo);
      this.todoService
        .deleteTodo(todo.id)
        .subscribe((res: TodoDeletedResponse) => {
          if (res.isDeleted) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            console.log('Todo Deleted =>', res);
            this.loaderService.stopLoader();
          }
        });
    } else {
      console.log('Deletion Cancelled for =>', todo);
    }
  }

  public onComplete(todo: Todo) {
    this.todos.forEach((item, index) => {
      if (item.id === todo.id) {
        item.completed = todo.completed;

        console.log('Updated todo =>', item);
      }
    });
  }
}
