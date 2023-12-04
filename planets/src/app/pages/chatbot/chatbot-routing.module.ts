import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotSelectionComponent } from './chatbot-selection/chatbot-selection.component';
import { PlayChatbotComponent } from './play-chatbot/play-chatbot.component';

const routes: Routes = [
  { path:'', component: ChatbotSelectionComponent },
  { path: 'play-chatbot/:id', component: PlayChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatbotRoutingModule { }
