const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // feito com a ajuda da deusa Débora e do deus pondaco.
  console.log(employeeName);
  if (employeeName === undefined) {
    return {};
  }
  // usado o find para fazer como no getAnimalsOlderThan pegando o primeiro que cumpre o requisito e o includes para ver se o nome declarado é verdadeiro ou falso, assim retornando o abjeto.
  const buscaDeFunci = employees.find((vrf) => employeeName.includes(vrf.firstName)
  || employeeName.includes(vrf.lastName));
  return buscaDeFunci;
}

console.log(getEmployeeByName());
module.exports = getEmployeeByName;
