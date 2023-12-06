import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/fetchs/user.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
})
export class HeaderPageComponent implements OnInit {
  username: string = '';

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername() {
    this.userService.getUsername().subscribe((response) => {
      this.username = response.username;
    });
  }
}
