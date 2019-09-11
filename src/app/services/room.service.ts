import { Injectable } from '@angular/core';
import { RoomModel } from '../models/room.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getTopFive(update: boolean = false): Observable<Array<RoomModel>> {

    if (update) {
      return timer(0, 30000).pipe(
        mergeMap(() => this.http.get<Array<RoomModel>>(environment.urlRooms).pipe(
          map(data => data.slice(0, 5))
        ))
      );
    } else {
      return this.http.get<Array<RoomModel>>(environment.urlRooms).pipe(
        map(data => data.slice(0, 5))
      );
    }
  }

  /*getTopFive2(func): void {
    this.http.get<Array<RoomModel>>(environment.urlRooms).subscribe(func);
  }*/

  getRooms(): Observable<Array<RoomModel>> {
    return this.http.get<Array<RoomModel>>(environment.urlRooms);
  }

  getRoomById(id: number): Observable<RoomModel> {
    return this.http.get<RoomModel>(`${environment.urlRooms}/${id}`);
  }

  insert(room: RoomModel): Observable<RoomModel> {
    return this.http.post<RoomModel>(environment.urlRooms, room);
  }

}
