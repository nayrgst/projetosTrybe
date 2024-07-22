const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // feito com a ajuda do brabissimo Magno.
  const funcionarios = employees.find((vrf) => vrf.id === id).responsibleFor[0];
  const animais = species.find((vrf) => vrf.id === funcionarios).residents;
  const oMaisVelho = animais.sort((a, b) => b.age - a.age);
  return oMaisVelho.map((vrf) => [vrf.name, vrf.sex, vrf.age])[0];
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
