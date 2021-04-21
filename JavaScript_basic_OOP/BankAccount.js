export class BankAccount {
    bankAgency;
    // #bankAccountBalance = 0;
    _bankAccountBalance = 0;

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
}