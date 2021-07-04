import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './get-users/get-users.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { UploadComponent } from './upload/upload.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:GetUsersComponent} ,
  {path:'upload',component:UploadComponent} ,
  {path:'view',component:ViewComponent,} ,
  {path:'users',component:GetUsersComponent} ,
  {path: 'login',component:LoginComponent},
  {path: 'profile',component:ProfileComponent},
  {path:'userdetils',component:UserdetailsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
