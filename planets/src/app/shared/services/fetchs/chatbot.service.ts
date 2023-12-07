import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable()
export class ChatbotService {
  conversations!: Map<string, any>;

  constructor() {
    this.setConversations();
  }

  setConversations() {
    this.conversations = new Map<string, any>([
      [
        'ira',
        [
          {
            id: 1,
            question:
              '¿Cómo puedo calmarme cuando siento que la ira se apodera de mí?',
            answer: `Entiendo que a veces puedo aparecer sin previo aviso. Primero, quiero que sepas que está bien sentir enojo. Soy una emoción normal y todos la experimentamos. Aquí van tres ideas para ayudarte a calmar mi sensación:`,
          },
          {
            id: 2,
            question:
              '¿Cómo puedo calmarme cuando siento que la ira se apodera de mí?',
            answer: `Entiendo que a veces puedo aparecer sin previo aviso. Primero, quiero que sepas que está bien sentir enojo. Soy una emoción normal y todos la experimentamos. Aquí van tres ideas para ayudarte a calmar mi sensación:`,
          },
        ],
      ],
      [
        'alegría',
        [
          {
            id: 1,
            question:
              '¿Cómo puedo calmarme cuando siento que la ira se apodera de mí?',
            answer: `Entiendo que a veces puedo aparecer sin previo aviso. Primero, quiero que sepas que está bien sentir enojo. Soy una emoción normal y todos la experimentamos. Aquí van tres ideas para ayudarte a calmar mi sensación:`,
          },
          {
            id: 2,
            question:
              '¿Cómo puedo calmarme cuando siento que la ira se apodera de mí?',
            answer: `Entiendo que a veces puedo aparecer sin previo aviso. Primero, quiero que sepas que está bien sentir enojo. Soy una emoción normal y todos la experimentamos. Aquí van tres ideas para ayudarte a calmar mi sensación:`,
          },
        ],
      ],
    ]);
  }

  getEmotionConversation(emotionId: string) {
    return this.conversations.get(emotionId) || [];
  }

  getEmotionQuestionAnswers(emotionId: string, conversationId: number) {
    const emotionConversations = this.conversations.get(emotionId) || [];
    if (emotionConversations) {
      const question = emotionConversations.find(
        (conversation: any) => conversation.id === conversationId
      );
      return question ? question.answer : 'Este pregunta es incorrecta';
    }
    return 'Esta emoción es incorrecta';
  }
}
