const clientes = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices; // refatorado para uma linha só

function countEntrants(entrants) {
  const menor = entrants.filter((vrf) => vrf.age < 18).length;
  const adulto = entrants.filter((vrf) => vrf.age >= 18 && vrf.age < 50).length;
  const veio = entrants.filter((vrf) => vrf.age >= 50).length;
  return { child: menor, adult: adulto, senior: veio };
}
console.log(countEntrants(clientes));

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.keys === undefined) { return 0; }
  const precos = (countEntrants(entrants));
  const valorTotal = [precos.senior * senior, precos.adult * adult, precos.child * child];
  return valorTotal.reduce((acc, curr) => acc + curr, 0); // refatorado com a ajuda do DEUS kaell, desse jeito mais simples tanto de entender como de explicar
}
console.log(calculateEntry(clientes));
module.exports = { calculateEntry, countEntrants };
