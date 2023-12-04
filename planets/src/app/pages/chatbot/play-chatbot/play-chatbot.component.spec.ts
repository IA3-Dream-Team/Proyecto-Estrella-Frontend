import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayChatbotComponent } from './play-chatbot.component';

describe('PlayChatbotComponent', () => {
  let component: PlayChatbotComponent;
  let fixture: ComponentFixture<PlayChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
