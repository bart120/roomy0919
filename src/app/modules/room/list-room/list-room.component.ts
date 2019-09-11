import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { RoomModel } from 'src/app/models/room.model';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styles: []
})
export class ListRoomComponent implements OnInit {

  rooms: Array<RoomModel>;

  constructor(private serv: RoomService) { }

  ngOnInit() {
    this.serv.getRooms().subscribe(data => this.rooms = data);
  }

}
