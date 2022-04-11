import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  str: String;
  users: Array<User>;
  userDetails: User;
  UserId: number;
  display = false;
  disp=false;
  updateUserDetails: User;
  

  constructor(private defaultService:DefaultService) {
  
  
}


  ngOnInit(): void {
    this.defaultService.Test().subscribe(
       res=>{
        // console.log(res);
        this.str = res;
        }
    )

    this.defaultService.GetAllUsers().subscribe(
      res=>{
        this.users = res;
        console.log(res);
      }
    )
  }

  addPostUser()
  {
  this.display = false;
   this.disp = true;
  }

  ShowUserDetails(UserId:number){
    this.defaultService.GetUserDetails(UserId).subscribe(
      res=>{
        this.display = true;
        this.disp= false;
        this.userDetails = res;
        console.log(res);
        
      }
    )
  }
 

}

