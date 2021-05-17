import { Client } from "./Client.js"

export class BankAccount {
    // bankAgency;
    // _client;

    // // #bankAccountBalance = 0;
    // _bankAccountBalance = 0;

    constructor(bankAgency, client, bankAccountBalance, quantityOfAccounts) {
        this.bankAgency = bankAgency;
        this.client = client;
        this._bankAccountBalance = 0;
        this.quantityOfAccounts += 1;
    }

    get bankAccountBalance() {
        return this._bankAccountBalance;
    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    toWithdraw(value) {
        if (this._bankAccountBalance >= value) {
            this._bankAccountBalance -= value;
        }
        return value;
    }

    toDeposit(value) {
        if (value <= 0) {
            return;
        }
        this._bankAccountBalance += value;
    }

    toTransfer(value, bankAccount) { //value é um tipo de valor, cópia (tipo primitivo) e bankAccount é um tipo de referência (informação direta, todas as altrerações são refletidas no objeto original)
        const amountWithdrawn = this.toWithdraw(value);
        bankAccount.toDeposit(amountWithdrawn);
    }
}

//Criamos um atributo cliente nessa classe para associar uma conta a uma cliente, já que é possível utilizar classes como atributo de outras classes e, assim, compor objetos mais complexos e relaciondos.