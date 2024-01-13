import { Component, Input } from '@angular/core';
import { Room } from '../room';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent {

  @Input() rooms : Room[] = [];

}
