import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { CommonImportsModule } from 'src/app/common-imports.module';
import { MaterialModule } from 'src/app/material.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HackerNewsComponent } from './pages/hacker-news/hacker-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgGridComponent } from './pages/ag-grid/ag-grid.component';
import { CustomCellComponent } from './components/custom-cell/custom-cell.component';
import { PracticeRoutingModule } from './practice-routing.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    HackerNewsComponent,
    AgGridComponent,
    CustomCellComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    CommonImportsModule,
    MaterialModule,
    SharedModule
  ],
  exports: []
})
export class PracticeModule {}
