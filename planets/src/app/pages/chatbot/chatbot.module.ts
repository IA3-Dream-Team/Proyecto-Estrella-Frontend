import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotSelectionComponent } from './chatbot-selection/chatbot-selection.component';
import { PlayChatbotComponent } from './play-chatbot/play-chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatbotService } from 'src/app/shared/services/fetchs/chatbot.service';

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
  ],
  providers: [ChatbotService]
})
export class ChatbotModule { }
