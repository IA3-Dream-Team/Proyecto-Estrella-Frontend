import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  planets: any;

  constructor() {}

  ngOnInit() {
    this.planets = [
      {
        title: 'Mercurio',
        subtitle: 'Diario',
        image: '/assets/images/mercury.png',
        navigateTo: 'video-scan',
      },
      {
        title: 'Neptuno',
        subtitle: 'Chatbot',
        image: '/assets/images/neptune.png',
        navigateTo: 'chatbot',
      },
      {
        title: 'Marte',
        subtitle: 'Juegos',
        image: '/assets/images/mars.png',
        navigateTo: 'game',
      },
    ];
  }

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
  };
}
