import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:GetUsersComponent} ,
  {path:'upload',component:UploadComponent} ,
  {path:'view',component:ViewComponent} ,
  {path:'users',component:GetUsersComponent} ,
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
