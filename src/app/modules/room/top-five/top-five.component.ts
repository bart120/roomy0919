import { Component, OnInit } from '@angular/core';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styles: []
})
export class TopFiveComponent implements OnInit {

  private _sub: Subscription;
  // private serv:RoomService;

  rooms: Array<RoomModel>; /*= [
    { name: 'Calliope', image: 'Calliope.jpg' },
    { name: 'Thalie', image: 'Thalie.jpg' },
    { name: 'Pegase', image: 'Pegase.jpg' }
  ];*/

  constructor(private serv: RoomService) {
    // this.serv = serv;
  }

  ngOnInit() {

    this._sub = this.serv.getTopFive()
      .pipe(
        map(
          (data => data.sort(
            (a, b) => a.name > b.name ? -1 : 1
          ))
        )
      ).subscribe((data) => {
        this.rooms = data;
      });

    /*this.serv.getTopFive2((data) => {
      this.rooms = data;
    });*/

  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }


}
