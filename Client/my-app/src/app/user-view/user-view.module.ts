import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DefaultService } from '../services/default.service';




@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule
    
  ],
  providers:[
    DefaultService
  ]
})
export class UserViewModule { }
