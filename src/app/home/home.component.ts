import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

import {loginPage} from "../login-page/model/login-page";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items!: MenuItem[];
  item!: MenuItem[];
  menuItems!: MenuItem[];
  response!: loginPage;
  userDetails!: any;


  constructor( private router : Router) {
  }

  ngOnInit() {
    const user = localStorage.getItem("currentUser");
    let currentUser = null;
    if (user != null) {
      currentUser = JSON.parse(user);
    }
    console.log("role", currentUser.role);
    this
      .menuItems = [{
      label: 'Funds',
      items: [
        {label: 'Funds', icon: 'pi pi-plus', routerLink: '/home/fundsCard',routerLinkActiveOptions:'Active'},
      ]
    },
      {
        label: 'Expenses',
        items: [
          {label: 'Expenses', icon: 'pi pi-briefcase', routerLink: '/home/dashboards'},
        ]
      }, {
        label: 'Transfer Funds',
        items: [
          {
            label: 'Transfer Funds', icon: 'pi pi-arrow-right-arrow-left', routerLink: '/home/transferFunds'
          },
        ]
      },
      {
        label: 'Users',
        visible: currentUser.role === 'admin',
        items: [
          {label: 'Users', icon: 'pi pi-users', routerLink: '/home/users'},
        ]
      }
    ];

    this.item = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: currentUser.profileName,
            visible: currentUser.role === 'admin',
            icon: 'pi pi-verified'
          },
          {
            label: currentUser.profileName,
            visible: currentUser.role === 'user',
            icon: 'pi pi-fw pi-user'
          },
          {
            separator: true
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => this.logout()
            // routerLink: '/loginPage'
          }
        ]
      }
    ]
  }


  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('user-type');
    this.router.navigate(['/loginPage'], { replaceUrl: true });
  }
}







