import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-chatbot',
  templateUrl: './play-chatbot.component.html',
  styleUrl: './play-chatbot.component.css'
})

export class PlayChatbotComponent implements OnInit {

  messages: any= [];
  value: any = '';
  chatbotId: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getChatbotIdFromUrl();
    console.log(this.chatbotId)
  }

  getChatbotIdFromUrl() {
    const chatbotIdParam = this.route.snapshot.paramMap.get('id');

    // Convierte a número solo si chatbotIdParam no es nulo
    this.chatbotId = chatbotIdParam ? +chatbotIdParam : this.chatbotId;
  }

  sendMessage(){}
  // constructor(public chatService: ChatService) { }

  // ngOnInit() {
  //     this.chatService.conversation.subscribe((val) => {
  //     this.messages = this.messages.concat(val);
  //   });
  // }

  // sendMessage() {
  //   this.chatService.getBotAnswer(this.value);
  //   this.value = '';
  // }

}
