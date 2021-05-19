import { Client } from "./Client.js"
import { BankAccount } from "./Account/BankAccount.js"
import { SavingAccount } from "./Account/SavingAccount.js"
import { Manager } from "./Employee/Manager.js"
import { Director } from "./Employee/Director.js"
import { AuthSystem } from "./AuthSystem.js"

const client1 = new Client("Natalia", 12345678);

const bankAccountClient1 = new BankAccount(client1, 1001);
bankAccountClient1.toDeposit(880);
bankAccountClient1.toWithdraw(80);

const savingAccount = new SavingAccount(100, client1, 1001);
savingAccount.toWithdraw(50);

// console.log(bankAccountClient1);
// console.log(savingAccount);

const director = new Director("Nat", 2000000, 1234987654);
director.registerPassword("123");

const manager = new Manager("Caio", 2000000, 12345098765);
manager.registerPassword("123");

const isDirectorLogged = AuthSystem.login(director, "123");
const isManagerLogged = AuthSystem.login(manager, "123");

console.log(isDirectorLogged);
console.log(isManagerLogged);

const client2 = new Client("Camila", 12345678900, "333");
const isClientLogged = AuthSystem.login(client2, "333");
console.log(isClientLogged);


//NPM - Node Package Manager é um gerenciador de pacotes JS

//npm init inicia um arquivo package.json, que guarda informações de configuração e dados da aplicação. Organiza pacotes e bibliotecas através dos gerenciadores de pacote.

//Os scripts do package.json servem para criarmos comandos para rodar o projeto, por exemplo: "scripts: { "start": "node index.js"}, desse modo podemos chamar apenas npm start