import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-GameSelection',
  templateUrl: './game-selection.component.html',
  styleUrl: './game-selection.component.css'
})

export class GameSelectionComponent implements OnInit {
  planets: any;

  constructor() {}

  ngOnInit() {
    this.planets = [
      {
        title: 'Juego 1',
        subtitle: 'Buscando a jimmy',
        image: '/assets/images/star-rocket-1.png',
        selectedGame: 'xxx',
      },
      {
        title: 'Juego 2',
        subtitle: 'Dominó Emociones',
        image: '/assets/images/star-rocket-2.png',
        selectedGame: 'xxx',
      },
      {
        title: 'Juego 3',
        subtitle: 'Cesta emociones',
        image: '/assets/images/star-rocket-3-full.jpg',
        selectedGame: 'xxx',
      },
      {
        title: 'Juego 4',
        subtitle: 'XXX',
        image: '/assets/images/star-rocket-4.png',
        selectedGame: 'xxx',
      },
            {
        title: 'Juego 2',
        subtitle: 'Dominó Emociones',
        image: '/assets/images/star-rocket-5-full.jpg',
        selectedGame: 'xxx',
      },
      {
        title: 'Juego 3',
        subtitle: 'Cesta emociones',
        image: '/assets/images/star-rocket-6-full.jpg',
        selectedGame: 'xxx',
      },
      {
        title: 'Juego 4',
        subtitle: 'XXX',
        image: '/assets/images/star-rocket-7-full.jpg',
        selectedGame: 'xxx',
      },
    ];
  }
}
