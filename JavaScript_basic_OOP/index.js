import { Client } from "./Client.js"
import { BankAccount } from "./BankAccount.js"
import { SavingAccount } from "./SavingAccount.js"

const client1 = new Client("Natalia", 12345678);

const bankAccountClient1 = new BankAccount(client1, 1001);
bankAccountClient1.toDeposit(880);
bankAccountClient1.toWithdraw(80);

const savingAccount = new SavingAccount(100, client1, 1001);
savingAccount.toWithdraw(50);

console.log(bankAccountClient1);
console.log(savingAccount);


//NPM - Node Package Manager é um gerenciador de pacotes JS

//npm init inicia um arquivo package.json, que guarda informações de configuração e dados da aplicação. Organiza pacotes e bibliotecas através dos gerenciadores de pacote.

//Os scripts do package.json servem para criarmos comandos para rodar o projeto, por exemplo: "scripts: { "start": "node index.js"}, desse modo podemos chamar apenas npm start