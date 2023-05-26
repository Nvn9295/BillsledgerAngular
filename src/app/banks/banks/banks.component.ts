import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {BanksService} from "../service/banks.service";
import {Banks} from "../model/banks";


@Component({
  selector: 'app-add-bank-details',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent {
  public banks: Banks[] = [];
  bankDetails = this.formBuilder.group(
    {
      bankName: [null, Validators.required],
      ifscCode: [null, [Validators.required,Validators.minLength(11),Validators.maxLength(11)]]
    })

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private addBankservice: BanksService) {
  }

  bankDetailsSubmit() {
    let newBankDetails = this.bankDetails?.getRawValue();
    this.addBankservice.addBank(newBankDetails).subscribe(response => {
      console.log(response)
    });
    setTimeout(() => {
      this.router.navigate(['/home/fundsCard'])
    }, 700);

  }
}
