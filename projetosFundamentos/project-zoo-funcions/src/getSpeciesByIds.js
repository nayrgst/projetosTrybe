const data = require('../data/zoo_data');
// usado o filter para filtrar os ids e o includes ver se tem o id declarado
const getSpeciesByIds = (...ids) => data.species.filter((specie) => ids.includes(specie.id));

console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274'));
module.exports = getSpeciesByIds;
