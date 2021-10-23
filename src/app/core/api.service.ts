import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getGalleryGridImages(query?: any):  Observable<any> {
    let params;
    query ? params = {
      query: `${query}`
    } : params = {
      query: 'life'
    }
    return this.http.get<any>(`https://api.unsplash.com/search/photos?client_id=LTNB5WMcNPir06RnJxoWG8GIAVN-TQhb6tfwzRNybjk`,  {params})
      .pipe(catchError((error) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server side error
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'Seems there is a network issue; please try again later.'
    );
  }
}
