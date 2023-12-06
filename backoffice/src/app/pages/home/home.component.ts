import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserFetchService } from 'src/app/shared/services/fetchs/user-fetch.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users:User[] = [];

  constructor(
    private userFetchService: UserFetchService,
  ) {}

  ngOnInit() {
    this.getUsers();

    // this.users = [
    //   {
    //     userId: '12',
    //     username: 'Cris',
    //     date: '20/12/22',
    //     emotion: 'Happy',
    //   },
    //   {
    //     userId: '13',
    //     username: 'Arnau',
    //     date: '20/12/22',
    //     emotion: 'Sad',
    //   },
    //   {
    //     userId: '12',
    //     username: 'Cris',
    //     date: '20/12/22',
    //     emotion: 'Afraid',
    //   },
    //   {
    //     userId: '13',
    //     username: 'Arnau',
    //     date: '20/12/22',
    //     emotion: 'Happy',
    //   },
    // ];
  }

  private getUsers():void {
    this.userFetchService.getUsers().subscribe((response)=>{
      this.users = response.users;
    })
  }
}
