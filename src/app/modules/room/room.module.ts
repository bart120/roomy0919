import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFiveComponent } from './top-five/top-five.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    TopFiveComponent
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
