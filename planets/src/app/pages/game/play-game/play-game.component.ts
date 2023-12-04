import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mini-GameSelection',
  templateUrl: './play-game.component.html',
  styleUrl: './play-game.component.css',
})
export class PlayGameComponent implements OnInit {
  games: any;
  gameId: number | null = 1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getGameIdFromUrl();
    this.games = [
      {
        title: 'game1',
        code: '<div class="container-wrapper-genially" style="position: relative; min-height: 400px; max-width: 100%;"><video class="loader-genially" autoplay="autoplay" loop="loop" playsinline="playsInline" muted="muted" style="position: absolute;top: 45%;left: 50%;transform: translate(-50%, -50%);width: 80px;height: 80px;margin-bottom: 10%"><source src="https://static.genial.ly/resources/loader-default.mp4" type="video/mp4" />Your browser does not support the video tag.</video><div id="655b4fd390cbf9001160fda4" class="genially-embed" style="margin: 0px auto; position: relative; height: auto; width: 100%;"></div></div><script>(function (d) { var js, id = "genially-embed-js", ref = d.getElementsByTagName("script")[0]; if (d.getElementById(id)) { return; } js = d.createElement("script"); js.id = id; js.async = true; js.src = "https://view.genial.ly/static/embed/embed.js"; ref.parentNode.insertBefore(js, ref); }(document));</script>',
      },
      // {
      //   title: 'game2',
      //   code: '<div class="container-wrapper-genially" style="position: relative; min-height: 400px; max-width: 100%;"><video class="loader-genially" autoplay="autoplay" loop="loop" playsinline="playsInline" muted="muted" style="position: absolute;top: 45%;left: 50%;transform: translate(-50%, -50%);width: 80px;height: 80px;margin-bottom: 10%"><source src="https://static.genial.ly/resources/loader-default.mp4" type="video/mp4" />Your browser does not support the video tag.</video><div id="655b539f90cbf90011634f4e" class="genially-embed" style="margin: 0px auto; position: relative; height: auto; width: 100%;"></div></div><script>(function (d) { var js, id = "genially-embed-js", ref = d.getElementsByTagName("script")[0]; if (d.getElementById(id)) { return; } js = d.createElement("script"); js.id = id; js.async = true; js.src = "https://view.genial.ly/static/embed/embed.js"; ref.parentNode.insertBefore(js, ref); }(document));</script>',
      // },
      // {
      //   title: 'game3',
      //   code: 'Juego 3',
      // },
      // {
      //   title: 'game4',
      //   code: 'Juego 4',
      // },
    ];
  }

  getGameIdFromUrl() {
    const gameIdParam = this.route.snapshot.paramMap.get('id');

    // Convierte a número solo si gameIdParam no es nulo
    this.gameId = gameIdParam ? +gameIdParam : null;
  }

  trackByFunction(index: number, game: any): string {
    return game.title;
  }
}
