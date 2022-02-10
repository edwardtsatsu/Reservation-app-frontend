import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Availability } from './availability';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {

  private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }

  public createAvailability(startTime:string, endTime:string, slot: number, day:string):Observable<Availability> {
    return this.http.post<Availability>(`${this.API_URL}/availabilities`,{startTime, endTime, slot, day});

  }
  
}
