import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomListComponent } from './rooms/room-list/room-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';

export const routes: Routes = [
  {
    path: 'rooms',
    loadComponent: () => import('./rooms/rooms.component').then(m=>m.RoomsComponent),
  },
  {
    path: 'roomlist',
    component: RoomListComponent,
    children: [{ path: ':id', component: RoomsBookingComponent }],
  },
  { path: '', redirectTo: '/roomlist', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];
