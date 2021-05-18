//classes criadas sem o intuito de serem instanciadas, são classes abstratas.

export class GeneralAccount {
    constructor(bankAccountBalance, client, bankAgency) {
        if(this.constructor == GeneralAccount) {
            throw new Error("Não devemos instanciar um objeto do tipo Conta, pois essa é uma classe abstrata.");
        }

        this._bankAccountBalance = bankAccountBalance;
        this._client = client;
        this._bankAgency = bankAgency;
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

    //método abstrato
    toWithdraw(value) { //value é um tipo de valor, cópia (tipo primitivo) e bankAccount é um tipo de referência (informação direta, todas as altrerações são refletidas no objeto original)
        throw new Error("O método toWithdrawn da classe GeneralAccount é abstrato. Precisa ser sobrescrito para ser utilizado.")
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