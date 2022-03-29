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
  usersDetails: Array<User>;
  UserId: number=1;

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

    this.defaultService.GetUserDetails(this.UserId).subscribe(
      res=>{
        this.usersDetails = res;
        console.log(res);
      }
    )
  }

}

