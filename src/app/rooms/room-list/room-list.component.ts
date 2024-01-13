import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';
import { RouterModule } from '@angular/router';
import { RoomsService } from '../service/rooms.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss',
})
export class RoomListComponent implements OnInit {
  @Input() rooms: Room[] = [];

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.rooms = this.roomsService.getRoomsListStatic();
  }
}
