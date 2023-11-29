import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayGameRoutingModule } from './play-game-routing.module';
import { PlayGameComponent } from './play-game.component';



@NgModule({
  declarations: [
    PlayGameComponent,
  ],
  imports: [
    CommonModule,
    PlayGameRoutingModule,
  ]
})
export class PlayGameModule { }
