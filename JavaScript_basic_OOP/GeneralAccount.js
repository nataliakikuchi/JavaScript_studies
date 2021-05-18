export class GeneralAccount {
    constructor(bankAccountBalance, client, bankAgency) {
        this._bankAccountBalance = bankAccountBalance;
        this._client = client;
        this._bankAgency = bankAgency;
        if(this.constructor == GeneralAccount) {
            console.log("Não devemos instanciar um objeto do tipo conta.");
        }
    }
    
    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    get bankAccountBalance() {
        return this._bankAccountBalance;
    }

    toWithdraw(value) { //value é um tipo de valor, cópia (tipo primitivo) e bankAccount é um tipo de referência (informação direta, todas as altrerações são refletidas no objeto original)
        let tax = 1;
        return this._toWithdrawn(value, tax);
      
    }

    _toWithdrawn(value, tax) {
        const amountWithdrawn = tax * value;

        if (this._bankAccountBalance >= amountWithdrawn) {
            this._bankAccountBalance -= amountWithdrawn;
            return amountWithdrawn;
        }

        return 0;
    }

    toDeposit(value) {
        if (value <= 100) {
            return;
        }
        this._bankAccountBalance += value;
    }

    toTransfer(value, bankAccount) {
        const amountWithdrawn = this.toWithdraw(value);
        bankAccount.toDeposit(amountWithdrawn);
    }
}