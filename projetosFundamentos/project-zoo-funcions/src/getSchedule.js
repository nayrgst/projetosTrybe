const { species, hours } = require('../data/zoo_data');

const dias = Object.keys(hours); // essa variavel pega o dias da semana que tem no objeto hours do zoo_data.
const animais = species.map((vrf) => vrf.name); // essa variavel pega todos os nomes das as espécies de animais que tem no objeto species.

function getSchedule(scheduleTarget) {
  // essa variavel puxa o horario que o zoologico está aberto e que horas ele fecha.
  let aviso = `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`;
  // puxa o array de dias dos animais disponiveis.
  const arrayDias = species.filter(({ availability }) => availability.includes(scheduleTarget));
  // essa variavel puxa o nome dos animais com um map para criar um array novo sem modificar o original.
  let arrayNomes = arrayDias.map(({ name }) => name);
  if (scheduleTarget === 'Monday') { // esse if exibe a mensagem de zoologico fechado e exibição fechada caso o dia selecionado seja segunda-feira.
    aviso = 'CLOSED';
    arrayNomes = 'The zoo will be closed!';
  }
  // aqui é onde incorpora a função trazendo trazendo o aviso se o zoologico está fechado ou aberto e quais animais vão estar em exibição.
  return { [scheduleTarget]: { officeHour: aviso, exhibition: arrayNomes } };
}

const horarios = (horas) => {
  // // esse if verifica se o dias é verdadeiro ou falso na lista de horarios, e retorna a função que exibe a aviso se o zoologico está aberto ou não e quais animais estão disponiveis.
  if (dias.includes(horas)) { return getSchedule(horas); }
  // esse if verifica se o parametro passado, no caso o animal é verdadeiro, ai ele pega o primeiro animal com find que corresponde ao parametro e quais dias esse animais está disponivel. Se não o if retorna todos os dias e animais diponiveis para exibição.
  if (animais.includes(horas)) { return species.find(({ name }) => name === horas).availability; }
  return dias.reduce((acc, dia) => ({ ...acc, ...getSchedule(dia) }), {});
};
console.log(horarios());
module.exports = horarios;
