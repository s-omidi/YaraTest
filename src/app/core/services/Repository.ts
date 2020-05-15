import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders , HttpParams } from '@angular/common/http';
import { EnvironmentUrlService } from './Enviroment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class Repository {
  constructor(
   private http: HttpClient,
   private env: EnvironmentUrlService
   ) { }

   private formatErrors(error: any): any {
    let errorMessage = '';
    if (error instanceof ErrorEvent) {
      errorMessage = error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }


  public getData(route: string): Observable<any> {
    return this.http.get(this.createCompleteRoute(route, this.env.urlAddress), {headers: this.generateHeaders()})
    .pipe(
      catchError(this.formatErrors)
    );
    }


  public create(route: string, body: any): Observable<any> {
     return this.http.post(this.createCompleteRoute(route, this.env.urlAddress), body, {headers: this.generateHeaders()})
     .pipe(
      catchError(this.formatErrors)
    );
  }

  public update(route: string, body: any): Observable<any> {
    return this.http.put(this.createCompleteRoute(route, this.env.urlAddress), body);
  }

  public delete(route: string): Observable<any> {
  return this.http.delete(this.createCompleteRoute(route, this.env.urlAddress), { headers: this.generateHeaders()});
  }


  private createCompleteRoute (route: string, envAddress: string): string {
    const completeAddress = `${envAddress}/${route}`;
    return completeAddress;
  }

  private generateHeaders(): HttpHeaders {
    const headerConfig = {
    'access-control-allow-origin': '*',
      'cache-control': 'no-cache',
      'content-encoding': 'gzip',
      'Authorization': '',
      'Content-Type': 'application/json'
    };
    return new HttpHeaders(headerConfig);
  }
}
