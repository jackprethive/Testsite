import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  email: string = '';
  name: string = '';
  phone: string = '';
  password: string = '';
  tc:  boolean= false;
  type: string ='';
  switch: boolean =true;
  num: string='';
selectedGender: string ='';
  gender: any =[
    'Male',
    'Female',
    'Others'
  ]

  options = [
    { value: '', label: 'Age group' },
    { value: '2-3', label: '2 to 3 years' },
    { value: '3-4', label: '3 to 4 years' },
    { value: '4-6', label: '4 to 6 years' },
    { value: '6-8', label: '6 to 8 years' },
    { value: '8-12', label: '8 to 12 years' },
  ];

  selectedValue: any = "6-8";
  radioChangeHandler (event:any){
    this.selectedGender = event.target.value;
  }

  constructor( ) { }

 

  ngOnInit(): void {
  }
  addprofile(formValue: NgForm){
    console.log(formValue.value);
  }
 
}
