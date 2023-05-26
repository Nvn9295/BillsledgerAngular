import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {loginPage} from "../model/login-page";


@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(private httpClient: HttpClient) {
  }

  loginUser(userDetails:any): Observable<loginPage> {
    return this.httpClient.post<loginPage>('http://localhost:8080/login', userDetails);
  }
}
