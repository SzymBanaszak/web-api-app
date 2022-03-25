import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultService } from './services/default.service';
import { UserViewModule } from './user-view/user-view.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserViewModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
