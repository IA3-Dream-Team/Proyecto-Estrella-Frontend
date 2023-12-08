import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoScanService {

  constructor(
    private http: HttpClient,
  ) {};

  getVideoScanQuestions(): Observable<any> {
    const url = 'http://127.0.0.1:8000/diaryquestions/';
    return this.http.get(url)
    .pipe(
      first()
    );
    // return of(
    //   {
    //     questions: ['¿Qué días son especiales para ti?', 'Con quién es importante para ti compartir los días especiales?']
    //   }
    // )
  }

  getStartVideoScan(): Observable<any> {
    const url = 'http://127.0.0.1:8000/videofeed/';
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage
    const httpOptions = {
      headers: {
        Authorization: `Token ${token}`
      }
    };
    return this.http.get(url, httpOptions)
    .pipe(
      first()
    );
  }

  getStopVideoScan(): Observable<any> {
    const url = 'http://127.0.0.1:8000/videofeed/';
    return this.http.get(url)
    .pipe(
      first()
    );
  }
}
