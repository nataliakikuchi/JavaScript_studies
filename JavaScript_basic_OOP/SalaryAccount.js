import { GeneralAccount } from "./GeneralAccount.js"

export class SalaryAccount extends GeneralAccount {
    constructor(client) {
        super(0, client, 888)
    }

			toWithdraw(value) {
				let tax = 1.01;
				return this._toWithdrawn();
    }
}