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
      // TODO: make dummy data to return here for avoiding errors
      catchError(this.handleError<QueryResponse>('getLaunches'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`Error in ${operation}, ${error}`); 
      return of(result as T);
    };
  }
}
