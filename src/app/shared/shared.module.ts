import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, LoaderComponent],
  providers: [],
  exports: [HeaderComponent, LoaderComponent],
})
export class SharedModule {}
