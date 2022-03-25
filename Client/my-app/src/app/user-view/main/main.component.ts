import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  str: String;

  constructor(private defaultService:DefaultService) {}
  
  ngOnInit(): void {
    this.defaultService.Test().subscribe(
       res=>{
        // console.log(res);
        this.str = res;
        }
    )
  }

}

