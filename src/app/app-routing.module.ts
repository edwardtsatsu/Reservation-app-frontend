import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AvailabilitiesComponent } from './availabilities/availabilities.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'availabilities',
    component: AvailabilitiesComponent,
  }

];


@NgModule({
  declarations: [],


  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { };


