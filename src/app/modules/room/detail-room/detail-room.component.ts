import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomModel } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styles: []
})
export class DetailRoomComponent implements OnInit {

  room: RoomModel;

  constructor(private route: ActivatedRoute, private serv: RoomService) { }

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.serv.getRoomById(id).subscribe(data => this.room = data);
  }

}
