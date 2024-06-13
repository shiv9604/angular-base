import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todos/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  // Events
  @Input() todo: Todo;

  @Output() edit: EventEmitter<Todo> = new EventEmitter();
  @Output() delete: EventEmitter<Todo> = new EventEmitter();
  @Output() complete: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {}

  public onComplete(completed: boolean) {
    this.todo.completed = completed;
    this.complete.emit(this.todo);
  }
}
