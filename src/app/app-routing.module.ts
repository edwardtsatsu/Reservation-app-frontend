import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AvailabilitiesComponent } from './availabilities/availabilities.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'availabilities',
    component: AvailabilitiesComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  }


];


@NgModule({
  declarations: [],


  imports: [CommonModule, RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { };


