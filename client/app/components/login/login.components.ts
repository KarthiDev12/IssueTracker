import { Component } from '@angular/core';
import {LoginServices} from '../services/login.service';
import {Login} from '../../../login';
import {User} from '../../../user';
import { AlertService} from '../alerts/alert.services';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
  selector: 'login',
  templateUrl: 'login.screen.html'
 
})
export class LoginComponents {
  user:User;
   username:string;
    password:string;
    success:any;
  //login:Login;
   constructor(private loginservice:LoginServices,private router: Router,private alertService: AlertService){
}


  authentication(username,password){
    console.log('inside authenticaaaaa'+this.username +this.password)

    this.loginservice.getAuth(this.username ,this.password).subscribe(user=>
    {
      this.user = user ; 
     //console.log('outputtttt'+this.user.name); 

     if(null !=this.user  && undefined != this.user){
       console.log('inside if '); 
       this.router.navigate(['/home',this.username]);
              console.log('inside if '+this.username); 

       }
       else{
         console.log("Entered else case"); 
          this.alertService.error('Username or password incorrect', false);
       }
     }
    )
     
   // this.router.navigate(['/Home',this.username]);
    //.subscribe(login=>{console.log(' loooooooo'+login.name)})
  }
 }