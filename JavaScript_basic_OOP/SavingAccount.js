export class SavingAccount {
    constructor(openingBalance, client, bankAgency) {
        this._openingBalance = openingBalance;
        this._client = client;
        this._bankAgency = bankAgency;
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

    toTransfer(value, bankAccount) {
        const amountWithdrawn = this.toWithdraw(value);
        bankAccount.toDeposit(amountWithdrawn);
    }
}