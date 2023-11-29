import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
  { path:'video-scan', loadChildren: () => import('./pages/video-scan/video-scan.module').then((m) => m.VideoScanModule) },
  { path:'chatbot', loadChildren: () => import('./pages/chatbot/chatbot.module').then((m) => m.ChatbotModule) },
  { path:'game-selection', loadChildren: () => import('./pages/game/game-selection.module').then((m) => m.GameSelectionModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
