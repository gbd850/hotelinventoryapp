import { Injectable } from '@angular/core';
import { Room, Roomtype } from '../room';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http : HttpClient) { }

  getRoomsList() {
    return this.http.get<Room[]>("/api/room");
  }
}
