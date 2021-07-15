import { Costs } from '../interfaces/costs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CostsService implements Resolve<Costs> {

  constructor(private http: HttpClient) { }
  
  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Costs> {
    return this.http.get<Costs>("./assets/mock-data/costs.json");
  }
}
