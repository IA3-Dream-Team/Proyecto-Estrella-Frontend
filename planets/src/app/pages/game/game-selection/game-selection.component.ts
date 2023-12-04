import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-GameSelection',
  templateUrl: './game-selection.component.html',
  styleUrl: './game-selection.component.css',
})
export class GameSelectionComponent implements OnInit {
  planets: any;

  constructor() {}

  ngOnInit() {
    this.planets = [
      {
        id: 1,
        title: 'Busca',
        subtitle: 'Busca la emoción escondida',
        image: '/assets/images/star-rocket-11-full.jpg',
      },
      {
        id: 2,
        title: 'Dominó',
        subtitle: 'Relaciona cada frase con su emoción',
        image: '/assets/images/star-rocket-12-full.jpg',
      },
      {
        id: 3,
        title: 'Cesta',
        subtitle: 'Recolecta las emociones',
        image: '/assets/images/star-rocket-10-full.jpg',

      },
      {
        id: 4,
        title: 'Memory',
        subtitle: 'Encuentras las parejas',
        image: '/assets/images/star-rocket-8-full.jpg',
      },
    ];
  }
}
