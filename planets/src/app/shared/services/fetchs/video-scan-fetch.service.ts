import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, of } from 'rxjs';
import { VideoScan } from '../../models/video-scan.model';

@Injectable({
  providedIn: 'root'
})
export class VideoScanFetchService {

  constructor(
    private http: HttpClient,
  ) {};

  getVideoScanQuestions(): Observable<any> {
    const url = 'http://127.0.0.1:8000/videofeed/';
    // return this.http.get(url)
    // .pipe(
    //   first()
    // );
    return of(
      {
        questions: ['¿Qué días son especiales para ti?', 'Con quién es importante para ti compartir los días especiales?']
      }
    )
  }

}
