import { Injectable } from '@angular/core';
import { Room, Roomtype } from '../room';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Photo } from './photo';
import { Subject, catchError, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  rooms : Room[] = [
  //   {
  //   name : "Room 1",
  //   type : Roomtype.Standard,
  //   price : 100,
  //   isAvailable : true
  // },
  // {
  //   name : "Room 2",
  //   type : Roomtype.Suite,
  //   price : 1000,
  //   isAvailable : true
  // },
  // {
  //   name : "Room 3",
  //   type : Roomtype.Deluxe,
  //   price : 500,
  //   isAvailable : false
  // }
  ]

  error$ = new Subject<string>();

  getPhotos$ = this.getPhotos().pipe(
    shareReplay(1)
  );

  getRoomsList$ = this.getRoomsList().pipe(
    catchError(err => {
      this.error$.next(err.message);
      return of([]);
    })
  );

  constructor(private http : HttpClient) { }

  getRoomsList() {
    return this.http.get<Room[]>("/api/room");
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress : true
    });
    return this.http.request<Photo[]>(request);
  }
}
