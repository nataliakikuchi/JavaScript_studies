import { GeneralAccount } from "./GeneralAccount.js";

export class SavingAccount extends GeneralAccount {
    constructor(openingBalance, client, bankAgency) {
        super(openingBalance, client, bankAgency);
    }

      //esse método sobrescreve o comportamento do método toWithdraw da classe mãe
      toWithdraw(value) {
        let tax = 1.02;
       return this._toWithdraw(value, tax);
    }
}