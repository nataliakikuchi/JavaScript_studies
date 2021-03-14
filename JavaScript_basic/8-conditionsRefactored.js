console.log(`Trabalhando com condicionais`);

const travelDestinations = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`
);

const clientAge = 10;
const hasAdultCompanion = true;
const hasTicketPaid = true;

console.log(`Destinos disponíveis:`);
console.log(travelDestinations);

if (clientAge >= 18 || hasAdultCompanion) {
    console.log(`Cliente é maior de idade ou está acompanhado por alguém responsável`);
    travelDestinations.splice(1, 1);
} else {
    console.log(`Cliente é menor de idade, não podemos vender.`);
}

console.log(travelDestinations);

console.log(`Embarque: \n\n`);
if(clientAge >= 18 || hasAdultCompanion && hasTicketPaid) {
    console.log(`Boa viagem!`);
} else {
    console.log(`Por algum motivo você não pode embarcar`);
}

