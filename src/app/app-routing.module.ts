import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthModule } from './modules/auth/auth.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'practice',
        pathMatch: 'full'
      },
      {
        path: 'practice',
        loadChildren: () =>
          import('./modules/user/practice.module').then((m) => m.PracticeModule)
      }
    ]
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
