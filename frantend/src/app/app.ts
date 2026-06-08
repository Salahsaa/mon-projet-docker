import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  messages: string[] = [];

  async ngOnInit() {
    try {
      // Appel de l'API Spring Boot sur le port 8080
      const response = await fetch('http://localhost:8080/api/messages');
      this.messages = await response.json();
    } catch (error) {
      this.messages = ["Erreur : Impossible de contacter le backend Spring Boot"];
    }
  }
}