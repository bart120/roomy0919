import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  rooms: Array<any> = [
    { name: 'Calliope', image: 'Calliope.jpg' },
    { name: 'Thalie', image: 'Thalie.jpg' },
    { name: 'Pegase', image: 'Pegase.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
