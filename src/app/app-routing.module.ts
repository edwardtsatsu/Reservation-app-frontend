import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AvailabilitiesComponent } from './availabilities/availabilities.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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


