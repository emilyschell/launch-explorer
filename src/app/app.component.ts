import { Component } from '@angular/core';
import { LaunchService } from './launch.service';
import { formatDate } from '@angular/common';

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
  ]
  sortBy: string | null = null;
  launches: Array<any> = [];
  page: number = 1;
  limit: number = 10;
  hasNextPage: boolean = true;
  hasPreviousPage: boolean = false;

  constructor(private launchService: LaunchService) { }

  getLaunches(): void {
    this.launchService.getLaunches(this.page, this.limit, this.sortBy)
      .subscribe(launches => {
        this.launches = launches.docs;
        this.hasNextPage = launches.hasNextPage;
        this.hasPreviousPage = launches.hasPrevPage;
      });
  }

  ngOnInit(): void {
    this.getLaunches();
  }

  onSetSortBy(): void {
    this.page = 1;
    this.getLaunches();
  }

  handleClick(): void {
    console.log('click.');
  }

  getYear(date: Date): string {
    return formatDate(date, "yyyy", "en");
  }

  nextPage(): void {
    this.page += 1;
    this.getLaunches();
  }

  previousPage(): void {
    this.page -= 1;
    this.getLaunches();
  }
}
