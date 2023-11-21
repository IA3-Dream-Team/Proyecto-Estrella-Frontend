import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';
import { VideoScan } from '../../models/video-scan.model';

@Injectable({
  providedIn: 'root'
})
export class VideoScanFetchService {

  constructor(
    private http: HttpClient,
  ) {};

  postVideoScan(body: VideoScan): Observable<any> {
    const url = 'https://run.mocky.io/v3/6f2952fc-3f23-496e-b713-a88ccbaa0f97';
    return this.http.post(url, body)
      .pipe(
        first()
      );
  }
}
