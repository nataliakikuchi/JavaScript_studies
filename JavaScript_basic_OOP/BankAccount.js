import { GeneralAccount } from "./GeneralAccount.js";

export class BankAccount extends GeneralAccount {
    
    // #bankAccountBalance = 0;
    // _bankAccountBalance = 0;

    static quantityOfAccounts = 0;

    constructor(client, bankAgency) {
        super(0, client, bankAgency); 
        BankAccount.quantityOfAccounts += 1;
    }

    //esse método sobrescreve o comportamento do método toWithdraw da classe mãe
      toWithdraw(value) {
        let tax = 1.1;
       return this._toWithdraw(value, tax);
    }
}

//Criamos um atributo cliente nessa classe para associar uma conta a uma cliente, já que é possível utilizar classes como atributo de outras classes e, assim, compor objetos mais complexos e relaciondos.