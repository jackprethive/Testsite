import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  message : string="Hello all";
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  constructor( private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
   this.initForm();
  }
  initForm(){
    this.formGroup= new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.auth.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);

          localStorage.setItem('userid',result.data.userId);
            localStorage.setItem('token',result.access_token);
            this.router.navigate(['userdetails']);
        }else{
          alert(result.message);
        }
      })
    }
  }

}




