import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select'; 
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchesComponent } from './launches/launches.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailsComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    MatGridListModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
