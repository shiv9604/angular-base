import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/pages/login/login.component';
import { SignUpComponent } from '../auth/pages/sign-up/sign-up.component';
import { AgGridComponent } from './pages/ag-grid/ag-grid.component';
import { HackerNewsComponent } from './pages/hacker-news/hacker-news.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { DeadlinesComponent } from './pages/deadlines/deadlines.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'deadlines',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'hacker-news',
    component: HackerNewsComponent
  },
  {
    path: 'ag-grid',
    component: AgGridComponent
  },
  {
    path: 'deadlines',
    component: DeadlinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule {}
