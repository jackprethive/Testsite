import { Component, OnInit } from '@angular/core';
import { SingleUser } from '../model/user';
import { UploadserviceService } from '../uploadservice.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  currentUserId: any;
  name!: string;
  email!: string;
  age!: Number;
  description!: string;
  gender!: string;


  currentUserDetail!: SingleUser ;

  constructor(private share: UploadserviceService) { }
  ngOnInit(): void {
    this.currentUserId= localStorage.getItem("userid")
    console.log(this.currentUserId);

    this.share.getOneUserDetail(this.currentUserId).subscribe(result => {
      console.log(JSON.stringify(result));

      // this.currentUserDetail = result.
      this.currentUserDetail = result.data[0]
this.name=this.currentUserDetail.username;
this.age=this.currentUserDetail.age;
this.gender=this.currentUserDetail.gender;
this.email=this.currentUserDetail.email;
this.description=this.currentUserDetail.description;
      //console.log(this.currentUserDetail);
      console.log(this.currentUserDetail.username);
      console.log(this.currentUserDetail.description);
      console.log(this.currentUserDetail.gender);


    })
  }
}
