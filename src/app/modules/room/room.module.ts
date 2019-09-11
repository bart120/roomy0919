import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { DetailRoomComponent } from './detail-room/detail-room.component';
import { RoomService } from 'src/app/services/room.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopFiveComponent,
    CreateRoomComponent,
    ListRoomComponent,
    DetailRoomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    TopFiveComponent
  ]/*,
  providers: [
    RoomService
  ]*/
})
export class RoomModule { }
