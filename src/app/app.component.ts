import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Testsite';
  imageObject: Array<object> = [];
  urls: Array<String> = [];
  width: Number = 500;
  height: Number = 500;

  ngOnInit() {
   
  }
  

}
