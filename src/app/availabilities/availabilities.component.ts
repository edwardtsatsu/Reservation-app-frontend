import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Availability } from './Availability';
import { AvailabilityService } from './availability.service';


@Component({
  selector: 'app-availabilities',
  templateUrl: './availabilities.component.html',
  styleUrls: ['./availabilities.component.css']
})
export class AvailabilitiesComponent implements OnInit {
  public successMsg: string;
  public errorMsg: string;
  startTime: string;
  endTime: string;
  slot: number;
  day: string;
  public availabilities: Availability[];
  public deleteAvailability: Availability;


  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit(): void {
  }
  public CreateAvailability() {
    this.successMsg = '';
    this.errorMsg = '';
    this.availabilityService.createAvailability(this.startTime, this.endTime, this.slot, this.day)
      .subscribe((createAvailability: Availability) => {
        this.endTime = '';
        this.startTime = '';
        this.day = '';
        this.successMsg = `Availability created Successfully for ${createAvailability.startTime} to ${createAvailability.endTime}`;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        }

      )
  }

  public getAvailabilities(): void {
    this.availabilityService.getAvailabilities().subscribe(
      (response:Availability[]) =>{
        this.availabilities = response;
        console.log(this.availabilities);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteAvailability(availabilityId: string): void {
    this.availabilityService.deleteAvailability(availabilityId).subscribe(
      (response:void) => {
        console.log(response);
        this.getAvailabilities();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
