import {Component} from '@angular/core';
import {LoginUsers} from "../model/login-users";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ExpensesService} from "../../expenses/service/expenses.service";
import {LoginUsersService} from "../service/login-users.service";
import Swal from "sweetalert2";
import {Roles} from "../model/roles";

@Component({
  selector: 'app-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent {

  loginUsersDetails: LoginUsers[] = [];
  saveUserResponse!: LoginUsers;
  visible!: boolean;
  roles: Roles [] = [];
  userInputData = this.formBuilder.group({
    userName: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(4)]],
    email: [null, [Validators.required, Validators.minLength(4)]],
    profileName: [null, [Validators.required, Validators.minLength(4)]],
    role: [null, [Validators.required]],
    roles: [null]
  })


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dashBoardService: ExpensesService,
              private loginUsersService: LoginUsersService) {
  }

  ngOnInit(): void {
    this.loginUsersService.getUser().subscribe((response) => {
      this.loginUsersDetails = response
    });
    setTimeout(() => {
      this.getRoles()
    }, 800);
  }

  activeUsers() {
    this.loginUsersService.getUser().subscribe((response) => {
      this.loginUsersDetails = response
    });
  }

  addNewUser() {
    const userData = this.userInputData.value;
    this.loginUsersService.addNewUser(userData).subscribe((response) => {
      this.saveUserResponse = response
      if (this.saveUserResponse.message == "Success") {
        Swal.fire({
          title: 'Success',
          icon: 'success',
          timer: 1500,
        })
        setTimeout(() => {
          this.activeUsers();
        }, 1200);
        setTimeout(() => {
          this.userInputData.reset();
        }, 1100);
      } else {
        Swal.fire({
          title: 'Failed',
          html: this.saveUserResponse.message,
          icon: 'error',
        })
        setTimeout(() => {
          this.activeUsers();
        }, 1200);
      }
    })
  }

  maskPassword(password: string): string {
    const visibleChars = 0;
    const maskedChars = password.length - visibleChars;
    return '*'.repeat(maskedChars) + password.substring(maskedChars);
  }

  deleteUser(id: number) {
    setTimeout(() => {
      this.activeUsers();
    }, 100);
    this.loginUsersService.deleteUser(id).subscribe(response => console.log(response))
  }

  showDialog() {
    this.visible = true;
  }

  saveRole() {
    const roleInfo = {
      roles: this.userInputData?.value?.roles
    };
    this.loginUsersService.saveRoles(roleInfo).subscribe(response => {
      console.log(response)
    })
    setTimeout(() => {
      this.ngOnInit()
    }, 900);
    setTimeout(() => {
      this.visible = false
    }, 1000);
  }

  getRoles() {
    this.loginUsersService.getRoles().subscribe(data => {
      this.roles = data
    });
  }
}
