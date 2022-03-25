import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/services/default.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private defaultService:DefaultService) { }
  
  ngOnInit(): void {
    this.defaultService.Test().subscribe(
       (res : String)=>{console.log(res);}

    )
  }

}

