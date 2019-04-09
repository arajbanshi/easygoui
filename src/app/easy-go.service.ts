import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service'
import { TaxiZones } from './TaxiZones'
import { ServiceOut } from './ServiceOut'
import { of, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from './../environments/environment'

@Injectable()
export class EasyGoService {
private headers:HttpHeaders;
private easyGoUrl: string = environment.apiUrl + '/TaxiZones'
private fhvUrl: string = environment.apiUrl + '/FhvTripDatas'
private greenCabUrl: string = environment.apiUrl + '/GreenTripDatas'
private yellowCabUrl: string = environment.apiUrl + '/YellowTripDatas'

  constructor(private http: HttpClient, private messageService: MessageService) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  
  }

  public getBoroughs():Observable<TaxiZones[]>{
    return this.http.get<TaxiZones[]>(this.easyGoUrl).pipe(
      tap(_ => console.log('fetched boroughs')),
      catchError(this.handleError<TaxiZones[]>('getBoroughs', []))
    );
  }

  public getFhvDetails(from: string, to: string, date: string):Observable<ServiceOut>{
    return this.http.post<ServiceOut>(this.fhvUrl + `?from=${from}&to=${to}&date=${date}`, '').pipe(
      tap(_ => console.log('fetched FhvDetails')),
      catchError(this.handleError<ServiceOut>('getFhvDetails', null))
    );
  }

  public getGreenCabDetails(from: string, to: string, date: string):Observable<ServiceOut>{
    return this.http.post<ServiceOut>(this.greenCabUrl + `?from=${from}&to=${to}&date=${date}`, '').pipe(
      tap(_ => console.log('fetched GreenCab details')),
      catchError(this.handleError<ServiceOut>('getGreenCabDetails', null))
    );
  }

  public getYellowCabDetails(from: string, to: string, date: string):Observable<ServiceOut>{
    return this.http.post<ServiceOut>(this.yellowCabUrl + `?from=${from}&to=${to}&date=${date}`, '').pipe(
      tap(_ => console.log('fetched YellowCab details')),
      catchError(this.handleError<ServiceOut>('getYellowCabDetails', null))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
   
      this.messageService.add(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
