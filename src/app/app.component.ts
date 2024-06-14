import { Component } from '@angular/core';
import { LaunchService } from './launch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  sortByOptions = [
    { value: "name", name: "Name (asc.)" },
    { value: "-name", name: "Name (desc.)" },
    { value: "flight_number", name: "Flight # (asc.)" },
    { value: "-flight_number", name: "Flight # (desc.)" },
    { value: "date_utc", name: "Year (asc.)" },
    { value: "-date_utc", name: "Year (desc.)" },
  ]
  sortBy: string | null = null;
  launches: Array<any> = [];
  page: number = 1;
  limit: number = 10;

  constructor(private launchService: LaunchService) { }

  getLaunches(): void {
    this.launchService.getLaunches(this.page, this.limit, this.sortBy)
      .subscribe(launches => this.launches = launches.docs);
  }

  ngOnInit(): void {
    this.getLaunches();
  }
}
