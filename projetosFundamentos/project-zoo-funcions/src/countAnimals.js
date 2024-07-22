const {
  species,
} = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    // utilizado o reduce com a ajuda do magno para que o curr percorrer os residentes e acumular a quantidades de animais da especie com o acumulador acc.
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  // feito com a ajuda do Lenon deus sagrado
  const totalAnimais = species.find((vrf) => vrf.name === animal.specie); // usado o find para pegar o elemento e verifcar se corresponde com o nome chamado
  const sexoTotal = totalAnimais.residents.filter((vrf) => vrf.sex === animal.sex).length; // usado o filter para pegar todos que tem o elemento desejado e a quantidade que tem.
  if (!animal.sex) {
    return totalAnimais.residents.length;
  } return sexoTotal; // feito o if para que no caso de animal for diferente do sexo dos animais, retorna a quantidade de animais existem, se não retorna a quantidade de animais daquele sexo existem./
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));

module.exports = countAnimals;
