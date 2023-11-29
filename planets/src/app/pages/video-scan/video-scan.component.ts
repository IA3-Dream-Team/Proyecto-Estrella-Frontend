import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoScan } from 'src/app/shared/models/video-scan.model';
import { VideoScanFetchService } from 'src/app/shared/services/fetchs/video-scan-fetch.service';

@Component({
  selector: 'app-video-scan',
  templateUrl: './video-scan.component.html',
  styleUrls: ['./video-scan.component.css']
})

export class VideoScanComponent implements OnInit {

  constructor(
    private videoScanFetchService: VideoScanFetchService,
    private http: HttpClient,
  ) {};

  ngOnInit() {
  }

  getVideoScanImage(){
    this.videoScanFetchService.getVideoScanImage().subscribe((response) =>
      {}
    );
  }
}

