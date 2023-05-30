import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path:'**',
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
