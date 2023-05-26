import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpensesComponent} from "./expenses/expenses/expenses.component";
// @ts-ignore
import {LoginPageComponent} from "./login-page/login-page/login-page.component";
import {TransferFundsComponent} from "./transfer-funds/transfer-funds/transfer-funds.component";
import {FundsComponent} from "./funds/funds/funds.component";
import {BanksComponent} from "./banks/banks/banks.component";
import {BeneficiaryComponent} from "./beneficiary/beneficiary/beneficiary.component";
import {LoginUsersComponent} from "./login-users/login-users/login-users.component";
import {HomeComponent} from "./home/home.component";
import {RoleGuard} from "./role.guard";


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'loginPage', component: LoginPageComponent},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'dashboards', component: ExpensesComponent},
      {path: 'transferFunds', component: TransferFundsComponent},
      {path: 'fundsCard', component: FundsComponent},
      {path: 'addBank', component: BanksComponent},
      {path: 'addTransfer', component: BeneficiaryComponent},
      {path: 'users', component: LoginUsersComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

// {path: 'admin-homepage', component:AdminHomepageComponent,canActivate:[AuthguardGuard]
