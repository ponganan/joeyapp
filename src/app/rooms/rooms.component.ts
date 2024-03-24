import { Component } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'joey-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  hotelName = 'River City';
  numberOfRooms = 18;
  hideRooms = false;
  //interpolation syntax

  room: Room = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 5,
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
