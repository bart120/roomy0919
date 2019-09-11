import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { RoomModel } from 'src/app/models/room.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styles: []
})
export class CreateRoomComponent implements OnInit {

  formRoom: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
    seatCount: new FormControl(),
    image: new FormControl('', [Validators.required])
  });

  pictures: Array<any> = [
    { id: 'Pegase.jpg', image: 'Image Pegase' },
    { id: 'Celliope.jpg', image: 'Image Celliope' },
    { id: 'Thalie.jpg', image: 'Image Thalie' }
  ];

  constructor(private serv: RoomService, private snack: MatSnackBar) { }

  ngOnInit() {

  }

  onSubmit(): void {
    console.log(this.formRoom);
    if (this.formRoom.valid) {
      this.serv.insert(this.formRoom.value as RoomModel).subscribe(
        data => this.snack.open(`La salle a été ajoutée avec l'id ${data.id}`, 'OK', { duration: 3000 }),
        err => console.log(err)
      );
    }
  }

  getNameErrorMessage() {
    return this.formRoom.controls.name.hasError('required') ? 'champ obligatoire' : '6 caractères minimum';
  }
}
