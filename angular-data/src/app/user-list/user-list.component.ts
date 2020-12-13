import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  names: string[]; // Creazione del vettore di stringhe
  constructor() {
     this.names = ['Syd', 'Elliot', 'Andrea', 'Sam']; // Riempimento il vettore
  }
  ngOnInit() {
  }
}

