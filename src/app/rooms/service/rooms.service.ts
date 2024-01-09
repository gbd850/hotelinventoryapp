import { Injectable } from '@angular/core';
import { Roomtype } from '../room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  rooms = [{
    name : "Room 1",
    type : Roomtype.Standard,
    price : 100,
    isAvailable : true
  },
  {
    name : "Room 2",
    type : Roomtype.Suite,
    price : 1000,
    isAvailable : true
  },
  {
    name : "Room 3",
    type : Roomtype.Deluxe,
    price : 500,
    isAvailable : false
  }
  ]

  constructor() { }

  getRoomsList() {
    return this.rooms;
  }
}
