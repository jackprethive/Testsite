import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { HttpClientModule } from '@angular/common/http'
import{ ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from "ng-image-slider";

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ViewComponent,
    GetUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
RouterModule,
NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
