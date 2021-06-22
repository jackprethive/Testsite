import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { HttpClientModule } from '@angular/common/http'
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageSliderModule } from "ng-image-slider";
import { TodoService } from './view/todo.service';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ViewComponent,
    GetUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
RouterModule,
NgImageSliderModule,
BrowserAnimationsModule,
FlexLayoutModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatToolbarModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
