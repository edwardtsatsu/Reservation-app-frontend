import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reservation } from './Reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private API_URL_RESERVATION = environment.API_URL;

  constructor(private http: HttpClient){}


 public createReservation(date:string,email:string,title:string,availabilityId:string): Observable<Reservation>{

    return this.http.post<Reservation>(`${this.API_URL_RESERVATION}/reservation`, {date,email,title,availabilityId})
    
  }

 public deleteReservation(reservationId:any, email:string): Observable<any> {
    return this.http.delete(`${this.API_URL_RESERVATION}/reservation/${reservationId}/${email}`);
  }


}
