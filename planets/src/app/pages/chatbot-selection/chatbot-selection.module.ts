import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotSelectionComponent } from './chatbot-selection.component';
import { ChatbotSelectionRoutingModule } from './chatbot-selection-routing.module';

@NgModule({
  declarations: [
    ChatbotSelectionComponent,
  ],
  imports: [
    CommonModule,
    ChatbotSelectionRoutingModule,
  ]
})
export class ChatbotSelectionModule { }
