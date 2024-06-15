import { Component, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';

import { LaunchService } from './../launch.service';
import { LaunchData } from '../LaunchData';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.css',
})
export class LaunchesComponent {
  sortByOptions = [
    { value: "name", name: "Name (asc.)" },
    { value: "-name", name: "Name (desc.)" },
    { value: "flight_number", name: "Flight # (asc.)" },
    { value: "-flight_number", name: "Flight # (desc.)" },
  ]
  sortBy: string | null = null;
  launches: Array<LaunchData> = [];
  page: number = 1;
  limit: number = 10;
  totalPages: number | null = null;
  hasNextPage: boolean = true;
  hasPreviousPage: boolean = false;
  @ViewChild(MatTable) launchesTable!: MatTable<LaunchData>;
  columnsToDisplay = ['flight_number', 'year', 'name', 'details'];

  constructor(private launchService: LaunchService, private router: Router) { }

  getLaunches(): void {
    this.launchService.getLaunches(this.page, this.limit, this.sortBy)
      .subscribe(launches => {
        this.launches = launches.docs;
        this.hasNextPage = launches.hasNextPage;
        this.hasPreviousPage = launches.hasPrevPage;
        this.totalPages = launches.totalPages;
      });
    this.launchesTable.renderRows();
  }

  ngAfterViewInit(): void {
    this.getLaunches();
  }

  shortenDetails(details?: string | null) {
    return details && details.length > 200 ? `${details.slice(0,200)}...` : details;
  }

  onSetSortBy(): void {
    this.page = 1;
    this.getLaunches();
  }

  handleRowClick(row: LaunchData) {
    this.router.navigate(
      [`/details/${row.flight_number}`]
    );
  }

  getYear(date: string | null): string {
    if (!date) return "";
    return formatDate(new Date(date), "yyyy", "en");
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
