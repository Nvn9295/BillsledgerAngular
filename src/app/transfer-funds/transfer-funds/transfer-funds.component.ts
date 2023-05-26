import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TransferFundsService} from "../service/transfer-funds.service";
import {TransferFunds} from "../model/transfer-funds";
import {Beneficiary} from "../../beneficiary/service/beneficiary";
import {BanksService} from "../../banks/service/banks.service";
import {Banks} from "../../banks/model/banks";


@Component({
  selector: 'app-transfer-card',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.css']
})
export class TransferFundsComponent implements OnInit {
  transferFundsDetails: TransferFunds[] = [];
  userType!: boolean;
  names: Beneficiary[] = [];
  visible!: boolean;
  transferFundsResponseMessage: TransferFunds[] = [];
  // banks = [
  //   {bankName: "HDFC"}
  // ];
  banks : Banks[]=[];
  beneficiaryBanks = [
    {bankName: "HDFC"},
    {bankName: "IDBC"}
  ];
  transferData = this.formBuilder.group(
    {
      transactionId: [null],
      date: [null, Validators.required],
      creditBank: [null, Validators.required],
      amount: [null, Validators.required],
      beneficiaryBank: [null, Validators.required],
      beneficiary: [null, Validators.required],
    })


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private transferFundsService: TransferFundsService,
              private transferredToService: Beneficiary,
              private banksService : BanksService) {
  }

  addNewTransfer() {
    this.router.navigate(["/home/addTransfer"])
  }

  submit() {
    const transferFundData = this.transferData.value;
    this.transferFundsService.addTransferFunds(transferFundData).subscribe((response) => {
      console.log(response),
        this.transferFundsResponseMessage = response.message;
      setTimeout(() => {
        this.transferFundsService.getTransferFunds().subscribe((response) => {
          this.transferFundsDetails = response;
        });
      }, 1000);
      setTimeout(() => {
        if (this.transferFundsResponseMessage != null) {
          this.visible = true;
        } else {
          this.visible = false;
          this.reset();
        }
      }, 800)

    });

  }

  reset() {
    this.transferData.reset();
  }

  ngOnInit(): void {
    const userType = localStorage.getItem('user-type');
    if (userType === 'admin') {
      this.userType = true;
    } else {
      this.userType = false;
    }
    this.transferFundsService.getTransferFunds().subscribe((response) => {
      this.transferFundsDetails = response
    });
    this.beneficiary();
    setTimeout(()=>{
      this.getBanks()
    },200)
  }

  beneficiary() {
    this.transferredToService.getPersonNames().subscribe(response => this.names = response)
  }

  private getBanks(){
    this.banksService.getBankDetails().subscribe(response =>{this.banks = response})
  }
}
