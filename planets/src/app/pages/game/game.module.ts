import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { GameRoutingModule } from './game-routing.module';
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    GameSelectionComponent,
    PlayGameComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
  ]
})
export class GameModule { }
