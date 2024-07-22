const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((vrf) => vrf.name === animal).residents.every((vrf) => vrf.age >= age); // usado o find para pegar o primero da especie e o every para verificar se o age é verdadeiro ou falso.
}

console.log(getAnimalsOlderThan('lions', 10));
module.exports = getAnimalsOlderThan;
