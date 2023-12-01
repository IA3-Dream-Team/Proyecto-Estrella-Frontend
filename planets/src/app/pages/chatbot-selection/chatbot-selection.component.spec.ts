import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSelectionComponent } from './chatbot-selection.component';

describe('ChatbotSelectionComponent', () => {
  let component: ChatbotSelectionComponent;
  let fixture: ComponentFixture<ChatbotSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatbotSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
