import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginPageService} from "../service/login-page.service";
import {loginPage} from "../model/login-page";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginpage',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  response!: loginPage;
  loginForm = this.fb.group({
    userName: [null, [Validators.required, Validators.minLength(4)]],
    password: [null, [Validators.required, Validators.minLength(4)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginPageService: LoginPageService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    const loginDetails = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    }

    this.loginPageService.loginUser(loginDetails).subscribe(data => {
        this.response = data
        {

          localStorage.setItem('currentUser', JSON.stringify(data))
          if (this.response.message == "Login Successful" && this.response.role == "user") {
            localStorage.setItem('user-type', 'user');
            Swal.fire({
              title: 'Welcome...',
              html: this.response.message,
              timer: 1000,
              icon: "success",
            });
            setTimeout(() => {
              this.router.navigate(['/home'])
            }, 1200,)
          } else if (this.response.message == "Login Successful" && this.response.role == "admin") {
            localStorage.setItem('user-type', 'admin');
            Swal.fire({
              title: 'Welcome...',
              html: this.response.message,
              timer: 1000,
              icon: "success",
            });
            setTimeout(() => {
              this.router.navigate(['/home'])
            }, 1200,)
          } else if (this.response.message == "invalid Password") {
            Swal.fire({
              title: 'Sorry...',
              html: this.response.message,
              timer: 1500,
              icon: "error",
            });
          } else {
            Swal.fire({
              title: 'Sorry...',
              html: this.response.message,
              icon: 'error',
            })

          }
        }
      }, error => Swal.fire({
        title: 'sorry...',
        html: 'An Internal error Occurred',
        timer: 1500,
        icon: "error",
      })
    )
  }
}


