import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoScan } from 'src/app/shared/models/video-scan.model';
import { VideoScanService } from 'src/app/shared/services/fetchs/video-scan.service';

@Component({
  selector: 'app-video-scan',
  templateUrl: './video-scan.component.html',
  styleUrls: ['./video-scan.component.css']
})

export class VideoScanComponent implements OnInit {
  isCameraOn = false;
  questions: any[] = [];

  constructor(
    private videoScanService: VideoScanService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.getVideoScanQuestions();
  }

  getVideoScanQuestions() {
    this.videoScanService.getVideoScanQuestions().subscribe((response) => {
      this.questions = response;
    });
  }

  getStartVideoScan() {
    this.videoScanService.getStartVideoScan().subscribe((response) => {
      console.log(response);
      this.isCameraOn = true;
    });
  }

  getStopVideoScan() {
    this.videoScanService.getStopVideoScan().subscribe((response) => {
      console.log(response);
    });
  }
}

