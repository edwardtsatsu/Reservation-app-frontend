import { Component, OnInit } from '@angular/core';
import { Reservation } from '../Reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  reservationDate: string;
  title: string;
  email: string;

  constructor(private reservationService: ReservationService) { }

  ngOnInit() {
  }

 public createReservation() {
    this.successMsg = '';
    this.errorMsg = '';
    this.reservationService.createReservation(this.reservationDate, this.title, this.email)
      .subscribe((createdReservation: Reservation) => {
        this.reservationDate = '';
        this.title = '';
        this.email = '';
        const reservationDate = new Date(createdReservation.reservationDate).toDateString();
        this.successMsg = `Reservation Booked Successfully for ${reservationDate}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }


}
