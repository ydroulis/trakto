import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './authGuard';
import { CoursewareComponent } from './components/courseware/courseware.component';
import { AllDesignsComponent } from './components/all-designs/all-designs.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, },
  { path: 'courseware', component: CoursewareComponent },
  { path: 'all-designs', component: AllDesignsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
