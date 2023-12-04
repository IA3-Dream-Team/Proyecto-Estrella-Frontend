import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mini-GameSelection',
  templateUrl: './play-game.component.html',
  styleUrl: './play-game.component.css',
})
export class PlayGameComponent implements OnInit {
  gameId: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getGameIdFromUrl();
  }

  getGameIdFromUrl() {
    const gameIdParam = this.route.snapshot.paramMap.get('id');

    // Convierte a número solo si gameIdParam no es nulo
    this.gameId = gameIdParam ? +gameIdParam : this.gameId;
  }
}
