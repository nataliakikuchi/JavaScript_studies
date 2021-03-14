console.log(`Trabalhando com condicionais`);

const travelDestinations = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`
);

const clientAge = 10;
const hasAdultCompanion = true;
let hasTicketPaid = false;
const chosenDestination = "São Paulo";

console.log(`\n Destinos disponíveis: `);
console.log(travelDestinations);

const isClientAllowed = clientAge >= 18 || hasAdultCompanion;

let counter = 0;
let isDestinationAvailable = false;
while(counter < 3) {
    if(travelDestinations[counter] == chosenDestination) {
        console.log(`Destino existe`);
        isDestinationAvailable = true;
        break;
    } 
    counter++;
}

console.log(`Destino existe: ${isDestinationAvailable}`);
// console.log(travelDestinations);

// if (isClientAllowed) {
//     console.log(`Cliente é maior de idade ou está acompanhado por alguém responsável`);
//     travelDestinations.splice(1, 1);
//     hasTicketPaid = true;
// } else {
//     console.log(`Cliente é menor de idade, não podemos vender.`);
//     hasTicketPaid = false;
// }

if(isClientAllowed && isDestinationAvailable) {
    console.log("Boa viagem!!!");
} else {
    console.log("Desculpe, você ainda não pode viajar");
}

for(let i = 0; i < 3; i++) {
    if(travelDestinations[i] == chosenDestination) {
        isDestinationAvailable = true;
        break;
    }
}
