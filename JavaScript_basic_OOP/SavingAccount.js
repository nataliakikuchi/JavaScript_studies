import { GeneralAccount } from "./GeneralAccount.js";

export class SavingAccount extends GeneralAccount {
    constructor(openingBalance, client, bankAgency) {
        super(openingBalance, client, bankAgency);
    }
}