import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../Models/User';
import { DefaultService } from '../../services/default.service';

@Component({
  selector: 'app-user-add-view',
  templateUrl: './user-add-view.component.html',
  styleUrls: ['./user-add-view.component.css']
})
export class UserAddViewComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private defaultService:DefaultService) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
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
    // UserId: this.userDetails.UserId,
     ...this.addUserForm.value
   }
   console.log(user);
   this.defaultService.addUser(user).subscribe(data => console.log(data));
 }

}
