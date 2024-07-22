// Desafio 10
function techList(tech, name) {
  let resultado = [];
    if (tech.length > 0) {
      let ordem = tech.sort();
        for (let index = 0; index < ordem.length; index += 1){
          let object = {
            tech: '',
            name: name, 
          };
          object.tech = ordem[index];
          resultado.push(object);
        }
        return resultado;
    }
    return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(number) {
    for (let index in number) {
      if (number[index] === 11) {
        number[index]
    }
}
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // não consegui também
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
