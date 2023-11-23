import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot.component';
import { ChatbotRoutingModule } from './chatbot-routing.module';
;

@NgModule({
  declarations: [
    ChatbotComponent,
  ],
  imports: [
    CommonModule,
    ChatbotRoutingModule,
  ]
})
export class ChatbotModule { }
