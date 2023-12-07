import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatbotService } from 'src/app/shared/services/fetchs/chatbot.service';

@Component({
  selector: 'app-play-chatbot',
  templateUrl: './play-chatbot.component.html',
  styleUrl: './play-chatbot.component.css',
})
export class PlayChatbotComponent implements OnInit {
  messages: any = [];
  value: any = '';
  chatbotId = 'ira';
  form!: FormGroup;
  chat: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private chatbotService: ChatbotService
  ) {}

  ngOnInit(): void {
    this.getChatbotIdFromUrl();
    this.initForm();
    console.log(this.chatbotId);
    this.setFirstMessage();
    console.log(this.chat);
  }

  getChatbotIdFromUrl() {
    this.chatbotId = this.route.snapshot.paramMap.get('id') || this.chatbotId;
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      message: [''],
    });
  }

  sendMessage() {
    console.log(this.form.value);
  }

  setFirstMessage() {
    const allEmotionConversations = this.chatbotService.getEmotionConversation(
      this.chatbotId
    );

    let firstMessage = `Hola, que quieres saber sobre la emoción ${this.chatbotId} \n
    Estas son las preguntas disponibles: \n`;

    allEmotionConversations.forEach((conversation: any) => {
      firstMessage += `${conversation.id}. ${conversation.question}\n`;
    });

    this.chat.push({ type: 'bot', message: firstMessage });
  }
}
