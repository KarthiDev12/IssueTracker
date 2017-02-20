import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app.routing.module';
import { AppComponent }   from './app.component';
import { UserComponent }   from './components/users/user.component';
//import { SkillsComponent }   from './components/users/skills.component';
import { AlertService} from './components/alerts/alert.services';
import { AlertComponent} from './components/alerts/alert.component';
import 'rxjs/Rx';
@NgModule({
  imports:  [ 
    BrowserModule ,HttpModule ,FormsModule ,AppRoutingModule,],
  
   declarations: [ AppComponent,UserComponent,AlertComponent],
   providers:[AlertService],
    bootstrap:  [ AppComponent ]
})
export class AppModule { }
