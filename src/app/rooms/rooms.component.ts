import { Component, OnInit } from '@angular/core';
import { Room, Roomtype } from './room';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  rooms : Room[] = [];

  ngOnInit(): void {
    this.rooms = [{
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
  }

}
