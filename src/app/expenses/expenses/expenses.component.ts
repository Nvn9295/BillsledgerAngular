import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {ExpensesService} from "../service/expenses.service";
import {Expenses} from "../model/expenses";
import {Beneficiary} from "../../beneficiary/service/beneficiary";
import {BanksService} from "../../banks/service/banks.service";
import {Banks} from "../../banks/model/banks";



@Component({
  selector: 'app-dashboard',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})

export class ExpensesComponent implements OnInit {


  banks: Banks [] = [];
  names: Beneficiary [] = [];
  expensesDetails: Expenses [] = [];
  totalBalance!: number;
  bankBalance!: number;
  walletBalance!: number;
  message!: string;
  visible!: boolean;
  acceptedFiles: string = ".pdf, .jpg, .png, .doc, .docx, .xls, .xlsx, .csv";

  expensesData = this.formBuilder.group({
    date: [null, Validators.required],
    transactionDetails: [null],
    amount: [null, [Validators.required]],
    expensesCategory: [null],
    source: [null, Validators.required],
    spentBy: [null, Validators.required],
    billReceipt: [],
  })

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private expensesService: ExpensesService,
              private transferToService: Beneficiary,
              private banksService: BanksService) {
  }

  // Expenses  Submit Event
  submit() {
    const expenseData = this.expensesData?.value;
    this.expensesService.addExpenses(expenseData).subscribe(response => {
      console.log(response);
      this.message = response.message;
      setTimeout(() => {
        this.getAvailableFunds()
      }, 100)
      setTimeout(() => {
        this.getExpensesDetails()
      }, 1100);
      setTimeout(() => {
        if (this.message != null) {
          this.visible = true;
        }
        if (this.message == null) {
          setTimeout(() => {
            this.reset()
          }, 1000);
          this.visible = false;
        }
      })
    });
  }

  ngOnInit(): void {
    this.getAvailableFunds();
    setTimeout(() => {
      this.getAvailableFunds()
    }, 100);
    setTimeout(() => {
      this.expensesSpentByNames()
    }, 200);
    setTimeout(() => {
      this.getExpensesDetails()
    }, 300);
    setTimeout(() => {
      this.getSource()
    }, 400)
  }

  reset() {
    this.expensesData.reset()
  }

  saveImage(event: any, fileUpload: any) {
    const formData: FormData = new FormData();
    formData.append('image', event.files[0]);
    this.expensesService.uploadImage(formData).subscribe((response: any) => {
      this.expensesData.controls['billReceipt'].setValue(response?.id);
      console.log(this.expensesData.getRawValue())
      Swal.fire({
        title: "Uploaded...",
        html: "successfully Uploaded",
        icon: "success",
        timer: 1000
      });
    });
    fileUpload.clear();
  }

  expensesSpentByNames() {
    this.transferToService.getPersonNames().subscribe((response) => {
      this.names = response
    })
  }

  private getExpensesDetails() {
    this.expensesService.getExpenses().subscribe(response => {
      this.expensesDetails = response;
    })
  }

  private getAvailableFunds() {
    this.expensesService.getAvailableFunds().subscribe(response => {
      this.totalBalance = response.totalBalance;
      this.bankBalance = response.bankBalance;
      this.walletBalance = response.walletBalance;
    });
  }

  private getSource() {
    this.banksService.getBankDetails().subscribe(response => {
      this.banks = response;
      this.banks.push({bankName: 'Petty Cash', ifscCode: "", message: ""});
    })
  }

}
