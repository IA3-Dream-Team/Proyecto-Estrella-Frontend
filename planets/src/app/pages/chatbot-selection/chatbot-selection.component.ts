import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot-selection',
  templateUrl: './chatbot-selection.component.html',
  styleUrl: './chatbot-selection.component.css'
})

export class ChatbotSelectionComponent implements OnInit {

  cards: any;

  constructor() {}

  ngOnInit() {

    this.cards = [
      {
        title: 'Asco',
        subtitle: 'Emoción del asco se da cuando...',
        image: '/assets/images/star-emotion-disgust.png',
        textColor: 'text-lime-500',
        hoverColor: 'hover:shadow-lime-500',
        selectedGame: 'xxx',
      },
      {
        title: 'Ira',
        subtitle: 'Emoción de la ira se da cuando...',
        image: '/assets/images/star-emotion-anger.png',
        textColor: 'text-red-600',
        hoverColor: 'hover:shadow-red-600',
        selectedGame: 'xxx',
      },
      {
        title: 'Alegría',
        subtitle: 'Emoción de la alegría se da cuando...',
        image: '/assets/images/star-emotion-happy.png',
        textColor: 'text-yellow-300',
        hoverColor: 'hover:shadow-yellow-300',
        selectedGame: 'xxx',
      },
      {
        title: 'Tristeza',
        subtitle: 'Emoción de la tristeza se da cuando...',
        image: '/assets/images/star-emotion-sad.png',
        textColor: 'text-sky-600',
        hoverColor: 'hover:shadow-sky-600',
        selectedGame: 'xxx',
      },
      {
        title: 'Miedo',
        subtitle: 'Emoción del miedo se da cuando...',
        image: '/assets/images/star-emotion-afraid.png',
        textColor: 'text-purple-600',
        hoverColor: 'hover:shadow-purple-600',
        selectedGame: 'xxx',
      },
    ];


    let slayers = document.querySelectorAll(".slayer");

    function removeClass(array:any, newclass:any) {
      array.forEach((element:any) => {
        if (element.classList.contains(newclass)) {
          element.classList.remove(newclass);
        }
      });
    }

    slayers.forEach((slayer) => {
      slayer.addEventListener("click", () => {
        if (slayer.classList.contains("selected")) {
          removeClass(slayers, "selected");
        } else {
          removeClass(slayers, "selected");
          slayer.classList.add("selected");
        }
      });
    });
  }
}



