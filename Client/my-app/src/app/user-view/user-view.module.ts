import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DefaultService } from '../services/default.service';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';




@NgModule({
  declarations: [
    MainComponent,
    UserDetailsViewComponent
  ],
  imports: [
    CommonModule
    
  ],
  providers:[
    DefaultService
  ]
})
export class UserViewModule { }
