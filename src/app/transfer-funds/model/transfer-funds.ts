export class TransferFunds {
  id !: number;
  transactionId !: string;
  date !: string;
  creditBank!: string;
  amount!: number;
  beneficiaryBank!: string;
  payee!: string;
  message!: string;
}
