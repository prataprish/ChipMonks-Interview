import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChipMonks-Interview';
  api = 'https://reqres.in/api/users';

  constructor (http: HttpClient) {}
}
