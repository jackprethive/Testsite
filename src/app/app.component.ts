import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


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
  constructor(public _apiService: AuthService) {}


  ngOnInit() {
   
  }
  

}
