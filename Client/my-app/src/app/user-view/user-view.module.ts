import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DefaultService } from '../services/default.service';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';
import { UserDetailsEditViewComponent } from './user-details-edit-view/user-details-edit-view.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainComponent,
    UserDetailsViewComponent,
    UserDetailsEditViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    DefaultService
  ]
})
export class UserViewModule { }
