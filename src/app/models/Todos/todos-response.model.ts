import { Todo } from './todo.model';

export interface TodosResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface TodoDeletedResponse extends Todo {
  deletedOn: string;
  isDeleted: boolean;
}
