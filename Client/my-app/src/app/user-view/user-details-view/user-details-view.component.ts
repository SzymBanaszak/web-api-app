import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { FormBuilder,  FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css']
})
export class UserDetailsViewComponent implements OnInit {
 
  @Input() userDetails: User;
 
 detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.detailsForm = this.formBuilder.group({
      FirstName: ['',[Validators.required]],
      LastName: ['', [Validators.required]],
      Pesel: ['', [Validators.required]],
      DateOfBrith: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Title: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      Adress: ['', [Validators.required]],
      Email:['', [Validators.required]],
      PhoneNumer: ['', [Validators.required]]
      
    });
  }
 Submit(){
   let user: User = {
     UserId: this.userDetails.UserId,
     ...this.detailsForm.value
   }
   console.log(user);

 }
}
