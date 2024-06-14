import { Component } from '@angular/core';
import { LaunchService } from './../launch.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.css'
})
export class LaunchesComponent {
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
  totalPages: number | null = null;
  hasNextPage: boolean = true;
  hasPreviousPage: boolean = false;

  constructor(private launchService: LaunchService) { }

  getLaunches(): void {
    this.launchService.getLaunches(this.page, this.limit, this.sortBy)
      .subscribe(launches => {
        this.launches = launches.docs;
        this.hasNextPage = launches.hasNextPage;
        this.hasPreviousPage = launches.hasPrevPage;
        this.totalPages = launches.totalPages;
      });
  }

  ngOnInit(): void {
    this.getLaunches();
  }

  shortenDetails(details?: string) {
    return details && details.length > 200 ? `${details.slice(0,200)}...` : details;
  }

  onSetSortBy(): void {
    this.page = 1;
    this.getLaunches();
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
