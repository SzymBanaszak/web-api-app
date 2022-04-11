import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { FormBuilder,  FormGroup, FormControl, Validators } from '@angular/forms';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css']
})
export class UserDetailsViewComponent implements OnInit {
 
  @Input() userDetails: User;
 
 detailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private defaultService:DefaultService) {}

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

    this.detailsForm?.patchValue({
      FirstName: this.userDetails.FirstName, 
      LastName: this.userDetails.LastName,
      Pesel: this.userDetails.Pesel,
      DateOfBrith: this.userDetails.DateOfBrith,
      Gender: this.userDetails.Gender,
      Title: this.userDetails.Title,
      Location: this.userDetails.Location,
      Adress: this.userDetails.Adress,
      Email: this.userDetails.Email,
      PhoneNumer: this.userDetails.PhoneNumer
    }); 

  }

  ngOnChanges(){
    this.detailsForm?.patchValue({
      FirstName: this.userDetails.FirstName, 
      LastName: this.userDetails.LastName,
      Pesel: this.userDetails.Pesel,
      DateOfBrith: this.userDetails.DateOfBrith,
      Gender: this.userDetails.Gender,
      Title: this.userDetails.Title,
      Location: this.userDetails.Location,
      Adress: this.userDetails.Adress,
      Email: this.userDetails.Email,
      PhoneNumer: this.userDetails.PhoneNumer
    }); 
  }

 Submit(){
   let user: User = {
     UserId: this.userDetails.UserId,
     ...this.detailsForm.value
   }
   console.log(user);
   this.defaultService.UpdateUserDetails(user).subscribe(data => console.log(data));
 }

 
}


