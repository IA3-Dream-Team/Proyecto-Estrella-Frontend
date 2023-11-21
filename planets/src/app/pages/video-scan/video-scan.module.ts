import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoScanRoutingModule } from './video-scan-routing.module';
import { VideoScanComponent } from './video-scan.component';

@NgModule({
  declarations: [
    VideoScanComponent
  ],
  imports: [
    CommonModule,
    VideoScanRoutingModule,
  ]
})
export class VideoScanModule { }
