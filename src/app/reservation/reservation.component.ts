import { Component, OnInit } from '@angular/core';
import { Availability } from '../Availability';
import { AvailabilityService } from '../availability.service';
import { Reservation } from './Reservation';
import { ReservationService } from './reservation.service';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  
})

export class ReservationComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  date: string;
  title: string;
  email: string;
  public availabilities: Availability[];
  availabilityId: string;
  public display = true;

  constructor(private reservationService: ReservationService, private availabilitiesService: AvailabilityService) { }


  ngOnInit() {
  }

  restForm(){
    this.date = null;
    this.title = null;
    this.email = null;
    this.availabilityId = null;

  }

 public createReservation() {
    this.successMsg = '';
    this.errorMsg = '';
    this.reservationService.createReservation(this.date, this.title, this.email,this.availabilityId)
      .subscribe((createdReservation: Reservation) => {
        const reservationDate = new Date(createdReservation.date).toDateString();
        this.successMsg = `Reservation Booked Successfully for ${reservationDate}`;
        this.restForm();
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

  public fetchAvailableSlot(){
    this.availabilitiesService.getAvailabilities(this.date)
    .subscribe((items: Availability[]) =>{
      this.availabilities = items;
      this.display = false;
    })
   
  }


}
