import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent {

  constructor(private router : ActivatedRoute) {}

id$ = this.router.paramMap.pipe(map(param => param.get('id')));

}
