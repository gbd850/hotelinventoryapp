import { Component, Input } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {

  @Input() rooms : Room[] = [];

}
