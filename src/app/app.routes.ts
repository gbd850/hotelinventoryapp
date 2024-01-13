import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';

export const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'roomlist', component: RoomListComponent },
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
];
