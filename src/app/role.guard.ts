import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate() {
    // let role = localStorage.getItem("userType");
    if( localStorage.getItem("userType")  == null){
        return false;
    }
  return true;
  }

}
