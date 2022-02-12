import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs';
import { Availability } from '../Availability';
import { AvailabilityService } from '../availability.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public availabilities: Availability[];
  public columns = ['startTime', 'endTime', 'slot', 'day','delete'];


  constructor(private availabilityService: AvailabilityService) { }

  ngOnInit() {
    this.availabilityService.getAvailabilities()
      .subscribe((availabilities: Availability[]): void => {
        this.availabilities = availabilities;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      });
  }

  deleteAvailability(availabilityId: any) {
    this.availabilityService.deleteAvailability(availabilityId)
      .pipe(
        mergeMap(() => this.availabilityService.getAvailabilities())
      )
      .subscribe((availabilities: Availability[]) => {
        this.availabilities = availabilities;
        this.successMsg = 'Successfully deleted availability';
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

}
