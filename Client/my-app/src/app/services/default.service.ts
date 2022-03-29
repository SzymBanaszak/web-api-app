import { HttpClient } from '@angular/common/http'
import {Injectable} from "@angular/core"
import { Observable } from 'rxjs'
import { User } from '../Models/User'




@Injectable()
export class DefaultService { 
    
    constructor(private http: HttpClient){}

    Test(){
        return this.http.get<String>('https://localhost:44398/Default')
        //return this.http.get<>('https://localhost:44398/Users')
    }

    GetAllUsers():Observable<Array<User>>{
        return this.http.get<Array<User>>('https://localhost:44398/Users')
    }

    GetUserDetails(UserId:number):Observable<Array<User>>{
        return this.http.get<Array<User>>('https://localhost:44398/Users/' + UserId )
    }
}
