// Core
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonImportsModule } from './common-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HeaderComponent } from './home/header/header.component';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { AuthModule } from './modules/auth/auth.module';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { appState } from './Store/app.state';
import { appReducer } from './Store/app.reducer';
import { loaderReducer } from './shared/components/loader/Store/loader.reducers';
import { SharedModule } from './shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonImportsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ loader: loaderReducer }),
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
