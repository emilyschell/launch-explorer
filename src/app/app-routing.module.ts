import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchesComponent } from './launches/launches.component';

const routes: Routes = [
  { path: '', component: LaunchesComponent },
  { path: 'details/:flight_num', component: LaunchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
