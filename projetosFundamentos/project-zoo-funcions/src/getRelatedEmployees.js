const { employees } = require('../data/zoo_data');

function isManager(id) {
  // usado o some e includes para verificar se o retorno do id é verdadeiro ou falso.
  return employees.some((vrf) => vrf.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const responsavel = employees.filter((vrf) => vrf.managers.includes(managerId));
  const nomes = responsavel.map((vrf) => `${vrf.firstName} ${vrf.lastName}`);
  return nomes;
}

module.exports = { isManager, getRelatedEmployees };
