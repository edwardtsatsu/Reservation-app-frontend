import { Component, OnInit } from '@angular/core';
import { Reservation } from './Reservation';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public successMsg:string;
  public errorMsg: string;
  public availabilityId:string;
  public start:string;
  public end:string;
  public email:string;
  public title:string;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  public createReservation(){
    this.successMsg = '';
    this.errorMsg = '';
    this.reservationService.createReservation(this.availabilityId, this.start, this.end,this.email,this.title)
    .subscribe((createdReservation: Reservation) => {
      this.availabilityId = '';
      this.start = '';
      this.end = '';
      this.email = '';
      this.title = '';
      this.successMsg = `Reservation Booked successfully for ${this.start}, ${this.end}`;
      
    },
    (error:ErrorEvent)=> {
      this.errorMsg = error.error.message;
      
    })
    
  }

}
