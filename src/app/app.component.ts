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

  // page: 2,
  // per_page: 6,
  // total: 12,
  // total_pages: 2,
  // data: [{
  //   id: 7,
  //   email: "michael.lawson@reqres.in",
  //   first_name: "Michael",
  //   last_name: "Lawson",
  //   avatar: "https://reqres.in/img/faces/7-image.jpg"
  // }, ...data]

  constructor (http: HttpClient) {}
}
