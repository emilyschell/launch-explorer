import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { QueryResponse } from './QueryResponse';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {
  queryUrl = "https://api.spacexdata.com/v5/launches/query";

  constructor(private http: HttpClient) { }

  getLaunches(page: number | null, limit: number | null, sortyBy: string | null): Observable<QueryResponse> {
    let requestBody = {
      "options": {
          "limit": limit,
          "page": page,
          "sort": sortyBy
      }
    }
    return this.http.post<QueryResponse>(this.queryUrl, requestBody).pipe(
      catchError(this.handleError<QueryResponse>('getLaunches', {} as QueryResponse))
    );
  }

  getLaunch<T>(flight_num: string | null): Observable<QueryResponse> {
    if (!flight_num) return of({} as QueryResponse);
    let requestBody = {
      "query": { "flight_number": flight_num }
    }

    return this.http.post<QueryResponse>(this.queryUrl, requestBody).pipe(
      catchError(this.handleError<QueryResponse>('getLaunch', {} as QueryResponse))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}, ${error}`); 
      return of(result as T);
    };
  }
}
