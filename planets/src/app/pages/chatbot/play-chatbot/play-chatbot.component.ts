import { Component, OnInit } from '@angular/core';
import { ChatbotService, Message } from 'src/app/shared/services/fetchs/chatbot.service';

@Component({
  selector: 'app-play-chatbot',
  templateUrl: './play-chatbot.component.html',
  styleUrl: './play-chatbot.component.css'
})

export class PlayChatbotComponent implements OnInit {

  messages: Message[] = [];
  value!: string;

  constructor(public chatbotService: ChatbotService) { }

  ngOnInit() {
      this.chatbotService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });
  }

  sendMessage() {
    this.chatbotService.getBotAnswer(this.value);
    this.value = '';
  }
}
