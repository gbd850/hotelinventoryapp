import { Component, OnInit } from '@angular/core';
import { Room, Roomtype } from './room';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsService } from './service/rooms.service';
import { Photo } from './service/photo';
import { HttpEventType } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomListComponent, CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  photos: Photo[] = [];

  totalBytes = 0;
  isDataLoaded = false;

  errors = this.roomsService.error$.asObservable();

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    // this.roomsService.getRoomsList().subscribe(rooms => this.rooms = rooms);

    // this.roomsService.getRoomsList$.subscribe(
    //   (rooms) => (this.rooms = this.rooms)
    // );
    this.roomsService.getPhotos$.subscribe((event) => {
      switch (event.type) {
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes = event.loaded;
          console.log(this.totalBytes);
          break;
        }
        case HttpEventType.Response: {
          this.isDataLoaded = true;
          console.log(event.body);
          this.photos = event.body!;
        }
      }
    });
  }
}
