import { Component, OnInit } from '@angular/core';
import { Availability } from '../availability';
import { AvailabilityService } from '../availability.service';

@Component({
  selector: 'app-availabilities',
  templateUrl: './availabilities.component.html',
  styleUrls: ['./availabilities.component.css']
})
export class AvailabilitiesComponent implements OnInit {
  public successMsg: string;
  public errorMsg:string;
  startTime:string;
  endTime:string;
  slot:number;
  day:string;
  

  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit(): void {
  }
  public createAvailability(){
    this.successMsg = '';
    this.errorMsg = '';
    this.availabilityService.createAvailability(this.startTime, this.endTime, this.slot, this.day)
    .subscribe((createAvailability: Availability) =>{
      this.endTime = '';
      this.startTime = '';
      this.day = '';
      this.successMsg = `Availability created Successfully for ${this.startTime} and ${this.endTime}`;
    },
    (error:ErrorEvent) => {
      this.errorMsg = error.error.message;
    }

    )
  }
}
