
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignuppageComponent } from './admin/signup-page/signup-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'signup-page', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent },
  {path: 'home', component: NavbarComponent},
  {path: 'register-user', component:SignuppageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
