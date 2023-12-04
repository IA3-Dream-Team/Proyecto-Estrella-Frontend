import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotSelectionComponent } from './chatbot-selection/chatbot-selection.component';
import { PlayChatbotComponent } from './play-chatbot/play-chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatbotSelectionComponent,
    PlayChatbotComponent,
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ChatbotModule { }
