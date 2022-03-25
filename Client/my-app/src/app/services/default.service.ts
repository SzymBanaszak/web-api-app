import { HttpClient } from '@angular/common/http'
import {Injectable} from "@angular/core"



@Injectable()
export class DefaultService { 
    
    constructor(private http: HttpClient){}

    Test(){
        return this.http.get<String>('https://localhost:44398/Default')
    }
}
