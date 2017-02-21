import { Component } from '@angular/core';
import {UserService} from './user.service';
import {User} from '../../../User';
import { AlertService} from '../alerts/alert.services';
import { Router } from '@angular/router';
@Component({

  moduleId: module.id,
  selector: 'user',
  providers:[UserService],
  templateUrl: 'user.component.html'
})
export class UserComponent { 
 users: User[];
 user: User;
  name:string;
    email :string;
    password:string;   
    project:string;
    id:number;
  constructor(private taskService:UserService,private alertService: AlertService,private router: Router){  
     
  //this.taskService.getTasks().then( tasks => this.tasks = tasks)
  }

  addTask(event){
    event.preventDefault();
    console.log(this.name);
     console.log(this.email);
     console.log(this.skills);
    var newUser = {
       _id : this.id,    
       name:this.name,
       skills:this.skills,
      email :this.email,
       password:this.password,     
      project:this.project
    }
   
    this.taskService.addUser(newUser).subscribe(data => {
                    this.alertService.success('User created successfully', false);
                    this.clearUser();
                    console.log("Inside submit"+newUser.name);
                    this.router.navigate(['/home',newUser.name]);
                   
                },
                error => {
                    this.alertService.error(error);
                   
                });
 
  }

  clearUser(){
    this.name = '';
    this.email = '';
    this.password = '';
    this.skills = [];
    this.project ='';
  }

  deleteTask(id){
    var users = this.users;
  console.log("id to be delted"+id);
  this.taskService.deleteTask(id)
  .subscribe(data => {
    if(data.n ==1){
      for(var i =0; i < users.length;i++){
       if(users[i]._id == id){
         users.splice(i ,1);
       }
      }
    }
       
         
      });
}

   public query = '';
    public skillList = [ "JAVA",".NET","C++","C","PHP","NODE",
                        "ANGULAR2","MONGO","MYSQL","EXPRESS",
                        ];
    public filteredList = [];
    public elementRef;
       public skills = [];
  
    filter() {
    if (this.query !== ""){
        this.filteredList = this.skillList.filter(function(el){
            return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
        }.bind(this));
    }else{
        this.filteredList = [];
    }
}
 
 select(item){
    this.skills.push(item);
    this.query = '';
    this.filteredList = [];
}
remove(item){
    this.skills.splice(this.skills.indexOf(item),1);
}

 
}