import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OlympicCountry } from "../models/OlympicCountry";

/** The service providing the data for the olympics. */
@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Array<OlympicCountry>>([]);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    return this.http.get<Array<OlympicCountry>>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        console.error(error);
        this.olympics$.next([]);
        return caught;
      })
    );
  }

  getOlympics(): Observable<Array<OlympicCountry>> {
    return this.olympics$.asObservable();
  }
}
