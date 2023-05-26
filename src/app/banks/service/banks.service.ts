import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Banks} from "../model/banks";

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  constructor(private httpClient: HttpClient) {
  }

  addBank(bank:any): Observable<Banks> {
    return this.httpClient.post<Banks>('http://localhost:8080/add-bank', bank);
  }

  getBankDetails(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-banks');
  }

}
