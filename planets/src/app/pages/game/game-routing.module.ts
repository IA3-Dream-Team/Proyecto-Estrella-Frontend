import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { PlayGameComponent } from './play-game/play-game.component';


const routes: Routes = [
  { path:'', component: GameSelectionComponent },
  { path:'play-game', component: PlayGameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
