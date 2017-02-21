import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from './components/login/home.component';
import { LoginComponents }   from './components/login/login.components';
import { AppComponent }   from './app.component';
import { UserComponent }   from './components/users/user.component';


const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  {  path: 'home/:username', component:HomeComponent },
  { path: 'login', component: LoginComponents },
  { path: 'user', component:UserComponent },
   { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}