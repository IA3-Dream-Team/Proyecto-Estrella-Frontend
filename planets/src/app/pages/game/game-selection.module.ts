import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectionComponent } from './game-selection/game-selection.component';
import { GameSelectionRoutingModule } from './game-selection-routing.module';



@NgModule({
  declarations: [
    GameSelectionComponent,
  ],
  imports: [
    CommonModule,
    GameSelectionRoutingModule,
  ]
})
export class GameSelectionModule { }
