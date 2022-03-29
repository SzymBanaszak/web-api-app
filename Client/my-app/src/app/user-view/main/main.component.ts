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

  constructor(private defaultService:DefaultService) {}
  
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

  ShowUserDetails(UserId:number){
    this.defaultService.GetUserDetails(UserId).subscribe(
      res=>{
        this.userDetails = res;
        console.log(res);
      }
    )
  }

}

