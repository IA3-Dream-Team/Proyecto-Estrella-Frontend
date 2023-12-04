import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotSelectionComponent } from './chatbot-selection/chatbot-selection.component';
import { PlayChatbotComponent } from './play-chatbot/play-chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatbotSelectionComponent,
    PlayChatbotComponent,
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    FormsModule,
  ]
})
export class ChatbotModule { }
