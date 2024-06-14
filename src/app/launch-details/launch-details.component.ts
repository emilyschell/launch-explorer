import { Component } from '@angular/core';
import { LaunchService } from '../launch.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrl: './launch-details.component.css'
})
export class LaunchDetailsComponent {
  launch: any = {};

  constructor(
    private launchService: LaunchService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLaunch()
  }

  getLaunch(): void {
    const flight_num = this.route.snapshot.paramMap.get('flight_num');
    this.launchService.getLaunch(flight_num).subscribe(launch => {
      this.launch = launch?.docs;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
