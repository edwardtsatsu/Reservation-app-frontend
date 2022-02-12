import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import { mergeMap } from 'rxjs';
import { Availability } from '../Availability';
import { AvailabilityService } from '../availability.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public availabilities: Availability[] = [];
  public columns = ['startTime', 'endTime', 'slot', 'day','delete'];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Availability>(this.availabilities);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


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

  deleteAvailability(id: string) {
    this.availabilityService.deleteAvailability(id)
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
