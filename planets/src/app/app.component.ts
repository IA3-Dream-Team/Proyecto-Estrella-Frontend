import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'planets';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    initFlowbite();
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        // Almacena el token para su uso en futuras solicitudes
        localStorage.setItem('token', token);
      }
    });
  }
}
