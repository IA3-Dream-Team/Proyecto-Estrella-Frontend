import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoScanComponent } from './video-scan.component';

const routes: Routes = [
  { path:'', component: VideoScanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoScanRoutingModule { }
