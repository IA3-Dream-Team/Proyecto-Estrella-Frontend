import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsername(): Observable<any> {
    const url = 'http://127.0.0.1:8000/user/';
    return this.http.get(url)
    .pipe(
      first()
    );
  }
}

