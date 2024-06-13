import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { StoreModule } from '@ngrx/store';
import { loaderReducer } from './components/loader/Store/loader.reducers';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent],
  providers: [],
  exports: [LoaderComponent]
})
export class SharedModule {}
