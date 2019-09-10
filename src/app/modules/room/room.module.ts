import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { DetailRoomComponent } from './detail-room/detail-room.component';



@NgModule({
  declarations: [
    TopFiveComponent,
    CreateRoomComponent,
    ListRoomComponent,
    DetailRoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopFiveComponent
  ]
})
export class RoomModule { }
