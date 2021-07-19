import { ExchangeRates } from '../interfaces/exchange-rates';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService implements Resolve<ExchangeRates> {

  constructor(private http: HttpClient) { }

  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>("./assets/mock-data/exchange-rates.json");
  }  
}