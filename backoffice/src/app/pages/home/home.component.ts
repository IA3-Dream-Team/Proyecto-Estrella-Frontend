import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dashboards: any;

  constructor() {}

  ngOnInit() {
    this.dashboards = [
      {
        id: '12',
        username: 'Cris',
        date: '20/12/22',
        emotion: 'Happy',
      },
      {
        id: '13',
        username: 'Arnau',
        date: '20/12/22',
        emotion: 'Sad',
      },
      {
        id: '12',
        username: 'Cris',
        date: '20/12/22',
        emotion: 'Afraid',
      },
      {
        id: '13',
        username: 'Arnau',
        date: '20/12/22',
        emotion: 'Happy',
      },
    ];
  }
}
