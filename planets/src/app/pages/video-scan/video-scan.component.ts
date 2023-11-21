import { Component } from '@angular/core';
import { VideoScan } from 'src/app/shared/models/video-scan.model';
import { VideoScanFetchService } from 'src/app/shared/services/fetchs/video-scan-fetch.service';

@Component({
  selector: 'app-video-scan',
  templateUrl: './video-scan.component.html',
  styleUrls: ['./video-scan.component.css']
})
export class VideoScanComponent {

  constructor(
    private videoScanFetchService: VideoScanFetchService,
  ) {};

  uploadVideo(){
    const data: VideoScan = {
      username: 'Cris',
      video: '1234'
    }
    this.videoScanFetchService.postVideoScan(data).subscribe((response) =>
      {
        console.log(response);
      }
    );
  }
}

