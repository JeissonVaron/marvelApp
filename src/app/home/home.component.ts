import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections: Array<any> = [
    {
      name: 'Personajes',
      link: 'personajes',
      img: 'assets/sections/personajes-v2.jpg'
    },
    {
      name: 'Comics',
      link: 'comics',
      img: 'assets/sections/comics-v2.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
