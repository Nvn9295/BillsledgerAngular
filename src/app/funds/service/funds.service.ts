import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Funds} from "../model/funds";

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(private httpClient: HttpClient) {
  }

  addFunds(funds:any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/add-funds', funds);
  }

  getFunds(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-funds');
  }

}
