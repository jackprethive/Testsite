import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/01.jpg'},
    {'id':2,'name':'Learn React','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/03.jpg'},
    {'id':3,'name':'Learn Ionic','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/04.jpg'},
    {'id':4,'name':'Learn nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/05.jpg'}
  ]

}
