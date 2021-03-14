console.log(`Trabalhando com listas`);

const travelDestinations = new Array(
    `São Paulo`,
    `Salvador`,
    `Rio de Janeiro`
); //nesse array tenho 3 elementos e as posições vão até 2, começando pelo zero. O índice 2 mostra o terceiro elemento da lista 

travelDestinations.push(`Natal`, `Gramado`);

console.log(travelDestinations);

travelDestinations.splice(0, 1);

console.log(travelDestinations);
console.log(travelDestinations[2]);

travelDestinations.splice(0, 4);
console.log(travelDestinations);