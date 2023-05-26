import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferFundsService {

  constructor(private httpClient: HttpClient) {
  }

  addTransferFunds(transferFunds: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/add-transfer-fund', transferFunds);
  }

  getTransferFunds(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-transfer-funds');

  }
}
