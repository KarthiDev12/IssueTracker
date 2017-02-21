import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Login} from '../../../login';
import 'rxjs/add/operator/map';
import {User} from '../../../User';

import { FormsModule } from '@angular/forms';

@Injectable()
export class LoginServices{
   user:User;
    constructor(private http:Http){
        console.log('Login Service Initiated ....')
    }

getAuth(username,password){
   
    console.log('inside service'+username)
    //{ console.log('inside service'+res.json())}
    return this.http.get('http://localhost:3000/api/task/'+username+"/"+password).map(res=>res.json() as User);
}

}