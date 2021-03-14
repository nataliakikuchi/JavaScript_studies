console.log(`Trabalhando com condicionais`);

const travelDestinations = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`
);

const clientAge = 10;
const hasAdultCompanion = true;

console.log(`Destinos disponíveis:`);
console.log(travelDestinations);

if(clientAge >= 18) {
    console.log(`Cliente é maior de idade`);
    travelDestinations.splice(1, 1);
} else if(hasAdultCompanion) {
    console.log(`Cliente é menor de idade, mas possui acompanhante maior de idade`);
    travelDestinations.splice(1, 1);
} else {
    console.log(`Cliente é menor de idade, não podemos vender.`);
}

console.log(travelDestinations);