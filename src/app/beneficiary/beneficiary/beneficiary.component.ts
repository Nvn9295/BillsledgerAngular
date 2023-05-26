import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Beneficiary} from "../service/beneficiary";

@Component({
  selector: 'app-transferred-to',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent {
  public names: Beneficiary[] = [];
  personName = this.formBuilder.group(
    {
      userName: [null, [Validators.required,Validators.minLength(4)]],
      number: [null, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    })

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private transferService: Beneficiary) {
  }

  personDetailsSubmit() {
    this.transferService.submitPersonName(this.personName.value).subscribe(response => {
      console.log(response)
    });
    setTimeout(() => {
      this.router.navigate(['/home/transferFunds'])
    }, 500);
  }

}
