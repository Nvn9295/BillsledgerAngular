import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Beneficiary {

  constructor(private httpClient: HttpClient) {
  }

  submitPersonName(transfer: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/add-name', transfer);
  }

  getPersonNames(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-names');
  }
}
