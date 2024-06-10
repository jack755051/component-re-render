import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './app/pages/platform/platform.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ResumeInputComponent } from './app/pages/resume-input/resume-input.component';
import { IncrementComponent } from './app/pages/increment/increment.component';

const routes: Routes = [
  {
    path: 'platform',
    component: PlatformComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'resume-input',
        component: ResumeInputComponent,
      },
      {
        path: 'increment',
        component: IncrementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
