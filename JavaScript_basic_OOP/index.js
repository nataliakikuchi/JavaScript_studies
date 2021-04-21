import { Client } from "./Client.js"
import { BankAccount } from "./BankAccount.js"

const client1 = new Client();
client1.firstName = "Natalia";
client1.cpf = 12345678900;

const client2 = new Client();
client2.firstName = "Caio";
client2.cpf = 9818738138182;

const bankAccountClient1 = new BankAccount();
bankAccountClient1.bankAgency = 1001;
bankAccountClient1.toDeposit(880);
const amountWithdrawn = bankAccountClient1.toWithdraw(400);

console.log(amountWithdrawn);
console.log(bankAccountClient1);

//npm init inicia um arquivo package.json
