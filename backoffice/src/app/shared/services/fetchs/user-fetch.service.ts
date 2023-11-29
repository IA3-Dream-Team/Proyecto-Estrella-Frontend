import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFetchService {

  constructor(
    private http: HttpClient,
  ) {};

  getUsers(): Observable<any> {
    const url = 'https://run.mocky.io/v3/2b67015a-6a03-4f9a-9f20-4c4b1bc9e1e2';
    return this.http.get(url)
      .pipe(
        first()
      );
  }
}
