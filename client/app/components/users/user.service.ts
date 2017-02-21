import {Injectable} from  '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../../../User'

@Injectable()
export class UserService {

     private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http){
        console.log("Task Service intialized");
    }

 // getTasks(){
   //   return this.http.get('http://localhost:3000/api/tasks')
       // .map(res => res.json);
   // }

    getTasks(): Promise<User[]> {      
            return this.http.get('http://localhost:3000/api/tasks',{headers: this.headers})
           .toPromise()
           .then(response => response.json() as User[])
           .catch(this.handleError);
     
                  
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  addUser(newUser){
      console.log("newUser" + newUser + newUser.name);
       return this.http
     .post('http://localhost:3000/api/user', JSON.stringify(newUser), {headers: this.headers})
     .map(res =>res.json() )
  }

   deleteTask(id){
      console.log("delteTask" +id);
       return this.http
     .delete('http://localhost:3000/api/task/'+id)
     .map(res =>res.json() )
  }
}