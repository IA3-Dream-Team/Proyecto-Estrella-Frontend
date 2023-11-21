import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoScanComponent } from './video-scan.component';

describe('VideoScanComponent', () => {
  let component: VideoScanComponent;
  let fixture: ComponentFixture<VideoScanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoScanComponent]
    });
    fixture = TestBed.createComponent(VideoScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
