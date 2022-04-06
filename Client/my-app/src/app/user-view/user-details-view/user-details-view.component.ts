import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css']
})
export class UserDetailsViewComponent implements OnInit {
 @Input() userDetails: User;
 

  constructor(private defaultService:DefaultService) {}

  ngOnInit(): void {
  }
 
}
