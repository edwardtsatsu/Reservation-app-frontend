import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from './Reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API_URL_RESERVATION = environment.API_URL_RESERVATION;

  constructor(private http: HttpClient){}
  

 public createReservation(availabilityId:string,start:string,end:string,email:string,title:string): Observable<Reservation>{
    return this.http.post<Reservation>(`${this.API_URL_RESERVATION}/reservation`, 
    {availabilityId,start,end,email,title});
  }

 public deleteReservation(reservationId:string, email:string): Observable<any> {
    return this.http.delete(`${this.API_URL_RESERVATION}/reservation/${reservationId}/${email}`);
  }


}
