import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AvailabilitiesComponent } from './availabilities/availabilities.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReservationComponent } from './reservation/reservation.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AvailabilityService } from './availability.service';
import { ReservationService } from './reservation/reservation.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    AvailabilitiesComponent,
    HomeComponent,
    ReservationComponent,
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatToolbarModule,
    NgxMaterialTimepickerModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatPaginatorModule
    

    
  ],
  providers: [MatNativeDateModule, MatToolbarModule,AvailabilityService,ReservationService],
  bootstrap: [AppComponent]

})

export class AppModule { }