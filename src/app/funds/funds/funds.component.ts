import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {FundsService} from "../service/funds.service";
import {BanksService} from "../../banks/service/banks.service";
import {Banks} from "../../banks/model/banks";
import {Funds} from "../model/funds";


@Component({
  selector: 'app-funds-card',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent {
  banks: Banks [] = [];
  userType!: boolean;
  funds: Funds [] = [];
  fundsDetails = this.formBuilder.group({
    source: [null, Validators.required],
    creditBy: [null, Validators.required],
    amount: [null, Validators.required],
    comment: [null]
  });
  names = [
    {creditBy: "Niranjan"},
    {creditBy: "Mubin"}
  ];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private fundsService: FundsService,
              private bankService: BanksService,
  ) {
  }

  addNewSource() {
    this.router.navigate(['/home/addBank'])
  }

  submit() {
    const fundsData = this.fundsDetails.value;
    this.fundsService.addFunds(fundsData).subscribe(response => {
      console.log(response)
    });
    setTimeout(() => {
      this.reset();
    }, 500);
    setTimeout(() => {
      this.getFunds()
    }, 600);

  }

  reset() {
    this.fundsDetails.reset()
  }

  getFunds() {
    this.fundsService.getFunds().subscribe(data => {
      this.funds = data;
    });

  }

  ngOnInit(): void {
    const userType = JSON.parse(JSON.stringify(localStorage.getItem('user-type')));
    if (userType == 'admin') {
      this.userType = true;
    } else {
      this.userType = false;
    }
    this.loadBanks();
    setTimeout(() => {
      this.getFunds()
    }, 100);
  }

  private loadBanks() {
    this.bankService.getBankDetails().subscribe(data => {
      this.banks = data;
      console.log(this.banks)
    });
  }

}
