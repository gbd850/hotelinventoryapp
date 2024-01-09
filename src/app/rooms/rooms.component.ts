import { Component, OnInit } from '@angular/core';
import { Room, Roomtype } from './room';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsService } from './service/rooms.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit{

  rooms : Room[] = [];

  constructor(private roomsService : RoomsService) {}

  ngOnInit(): void {
    this.rooms = this.roomsService.getRoomsList();
  }

}
