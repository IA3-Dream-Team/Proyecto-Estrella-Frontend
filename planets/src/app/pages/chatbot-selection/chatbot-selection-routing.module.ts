import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotSelectionComponent } from './chatbot-selection.component';

const routes: Routes = [
  { path:'', component: ChatbotSelectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatbotSelectionRoutingModule { }
