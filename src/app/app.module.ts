import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './login-page/login-page/login-page.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExpensesComponent} from './expenses/expenses/expenses.component';
import {TransferFundsComponent} from './transfer-funds/transfer-funds/transfer-funds.component';
import {HttpClientModule} from "@angular/common/http";
import {FundsComponent} from './funds/funds/funds.component';
import {TableModule} from "primeng/table";
import {BanksComponent} from './banks/banks/banks.component';
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {BeneficiaryComponent} from './beneficiary/beneficiary/beneficiary.component';
import {CheckboxModule} from "primeng/checkbox";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {LoginUsersComponent} from './login-users/login-users/login-users.component';
import {FileUploadModule} from "primeng/fileupload";
import {HomeComponent} from './home/home.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {LOCALE_ID} from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ExpensesComponent,
    TransferFundsComponent,
    FundsComponent,
    BanksComponent,
    BeneficiaryComponent,
    LoginUsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    InputNumberModule,
    CalendarModule,
    CheckboxModule,
    MenuModule,
    MenubarModule,
    CardModule,
    FileUploadModule,
    InputTextareaModule,
    DialogModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'en-IN'
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
