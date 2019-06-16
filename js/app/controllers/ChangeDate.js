let numeros = [3, 2, 11, 20, 8, 7];

console.log(numeros);

let numeros2 = numeros.map(n => n%2 ? n*2 : n);

console.log(numeros2);

function somaDoisNumeros(numero1, numero2) {
  return numero1 + numero2;
}

let numeros1 = [10, 30];

let avengers = ['Tony Stark', 'Steve Rogers', 'Natasha Romanoff'];

console.log(...avengers.map(avengers => '\n' + avengers));

