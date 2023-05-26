import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Expenses} from "../model/expenses";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(private httpClient: HttpClient) {
  }

  addExpenses(expenses:any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/add-expense', expenses);
  }

  getExpenses(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-expenses');
  }

  getAvailableFunds(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/available-funds');
  }

  uploadImage(image: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/save-file', image, {responseType: 'json'})
  }
}
