import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthservicesService {
  constructor(private http: HttpClient) {}

  // signup = (data: any) =>
  //   this.http
  //     .post(
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBurHiLWCOa4Qh_dM-dITzRqwqNRLQfP3M',
  //       data
  //     )
  //     .subscribe((data: any) => {
  //       console.log(data);
  //     })

  isauth: any = false;

  signup(data: any) {
    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBurHiLWCOa4Qh_dM-dITzRqwqNRLQfP3M',
        data
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An unknown error occurred.';
          if (error.error && error.error.error && error.error.error.message) {
            errorMessage = error.error.error.message;
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
  signin(data: any) {
    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBurHiLWCOa4Qh_dM-dITzRqwqNRLQfP3M',
        data
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An unknown error occurred.';
          if (error.error && error.error.error && error.error.error.message) {
            errorMessage = error.error.error.message;
          }
          console.error(errorMessage);
          return throwError(errorMessage);
        })
      );
  }
}
