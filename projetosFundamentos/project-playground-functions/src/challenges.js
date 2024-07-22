// Desafio 1
function compareTrue(param, param1) {
  if (param && param1 === true) {
      return true;
  }
      return false;
}

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}

// Desafio 3
function splitSentence(string) {
  let seperar = string.split(' ');
      return seperar;
}

// Desafio 4
function concatName(item) {
  let array = item[item.length - 1] + ', ' + item[0];
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
     return resultado;
}

// Desafio 6
function highestCount(resultado) {
  let number = resultado[0];
    let i = 0;
      for (let index = 0; index < resultado.length; index += 1) {
        if (resultado[index] > number) {
          number = resultado[index];
        }
      }
        for (let index = 0; index < resultado.length; index += 1){
          if (resultado[index] === number) {
            i += 1;
          }
        }
        return i;
    }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs( mouse - cat1)
  let distancia2 = Math.abs( mouse - cat2 )
    if (distancia1 < distancia2) {
      return "cat1";
    } else if (distancia1 > distancia2){
      return "cat2";
    } else {
      return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(resultado) {
  for (let index in resultado) {
    let number = resultado[index];
      if (number % 3 === 0 && number % 5 === 0) {
        resultado[index] = 'fizzBuzz'
      } else if (number % 3 === 0) {
        resultado[index] = 'fizz'
      } else if (number % 5 === 0) {
        resultado[index] = 'buzz'
      } else {
        resultado[index] = 'bug!'
      }
  }
  return resultado;
}
// Desafio 9 //referencia-leticia oliveira
function encode(string) {
  let resultado = string.split('');

    for (let index in resultado) {
      switch (resultado[index]) {
        case 'a':
          resultado[index] = 1;
          break;
        case 'e':
          resultado[index] = 2;
          break;
        case  'i':
          resultado[index] = 3;
          break;
        case 'o':
          resultado[index] = 4;
          break;
        case 'u':
          resultado[index] = 5;
          break;           
      }
    }
    return resultado.join('');
}
function decode(string) {
let resultado = string.split('');
    for (let index in resultado) {
      switch (resultado[index]) {
        case '1':
          resultado[index] = 'a';
          break;
        case '2':
          resultado[index] = 'e';
          break;
        case '3':
          resultado[index] = 'i';
          break;
        case '4':
          resultado[index] = 'o';
          break;
        case '5':
          resultado[index] = 'u';
          break;    
      }
  }
  return resultado.join('')
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
