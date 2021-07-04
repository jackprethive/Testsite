import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {UploadserviceService} from '../uploadservice.service'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  superPower  = 'wonderwomen';
  tax = 100;
success_msg = true;
  minDate = new Date();
  maxDate = new Date(2021, 6, 28);

  dateChanged($event: { target: { value: any; }; }){
    console.log($event.target.value);
    
  }
  profileForm!: FormGroup;
  error!: string;
  dob:any;
  filename:any;
  filelist!:[];
  fileUpload = {status: '', message: '', filePath: ''};
  constructor(private fb: FormBuilder, private uploadserviceService:UploadserviceService ) { }

  ngOnInit(): void {
    console.log(this.dob) 
    this.profileForm = this.fb.group({
      file: ['']

    });
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.profileForm.get('file')?.value);

    this.uploadserviceService.upload(formData).subscribe(
      (      res: { status: string; message: string; filePath: string; }) => this.fileUpload = res,
      (      err: string) => this.error = err
    );
  }
  retrive(){
    this.uploadserviceService.retrive().subscribe(
      (result: any) =>{
        if(result){
          this.filename = result;
          this.filelist=this.filename;
          console.log(result);
        }

      },
      (error: string)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }
}
