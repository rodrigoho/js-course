class Aluno {
  constructor(matricula, nome) {
    this.matricula = matricula;
    this.nome = nome;
  }
}

class Prova {
  constructor(aluno, nota) {
    this.aluno = aluno;
    this.nota = nota;
  }
}

let avaliacoes = [
  new Prova(new Aluno(1, 'Luana'), 8),
  new Prova(new Aluno(2, 'Cássio'), 6),
  new Prova(new Aluno(3, 'Barney'), 9),
  new Prova(new Aluno(4, 'Bira', 5))
];

let aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);

// console.log(aprovados);

class Game {
  constructor(studio, title) {
    this.studio = studio;
    this.title = title;
  }
}

class GameGrade {
  constructor(game, grade) {
    this.game = game;
    this.grade = grade;
  }
}

let titles = [
  new GameGrade(new Game('EA Games', 'Battlefield V'), 9),
  new GameGrade(new Game('Activision', 'Call of Duty Black Ops'), 8),
  new GameGrade(new Game('Rockstar', 'GTA V'), 10),
  new GameGrade(new Game('Rockstar', 'Red Dead Redemption II'), 10),
  new GameGrade(new Game('Naughty Dog', 'Uncharted'), 10),
]

let grade10Games = titles
    .filter(gameGrade => gameGrade.grade === 10)
    .map(gameTitle => {return gameTitle.game.studio + ' ' + gameTitle.game.title});
// console.log(grade10Games);

class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

let pokemons = [
  new Pokemon('Charmander', 'fire'),
  new Pokemon('Squirtle', 'water'),
  new Pokemon('Bulbasaur', 'grass'),
  new Pokemon('Charizard', 'fire'),
  new Pokemon('Blastoise', 'water'),
  new Pokemon('Venusaur', 'grass'),
];

// console.log(pokemons);

let fireTypePokemons = pokemons
    .filter(pokemonType => pokemonType.type === 'fire')
    .map(pokemonName => pokemonName.name);

// console.log(fireTypePokemons);

class Apple {
  constructor(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
  }
}

let appleProducts = [
  new Apple('iPhone', 'mobile', 1000),
  new Apple('Macbook Pro', 'computer', 3000),
  new Apple('Apple TV', 'tv', 199),
  new Apple('iPad', 'mobile', 599),
  new Apple('iPod', 'mobile', 199),
  new Apple('iMac', 'computer', 1999),
  new Apple('Apple Watch', 'wearable', 399),
]

// console.log(appleProducts);

let mobileApple = appleProducts
                  .filter(apple => apple.category === 'mobile')
                  .map(apple => apple.name);

// console.log(mobileApple);

let computerApple = appleProducts
                    .filter(apple => apple.category === 'computer')
                    .map(apple => apple.name);

// console.log(computerApple);

let charPokemons = pokemons.filter(pokemon => pokemon.name.includes('Bul')).map(pokemon => pokemon.name);

// console.log(charPokemons);

class SuperMarkets {
  constructor(name, products) {
    this.name = name;
    this.products = products;
  }
}

class SuperMarketProducts {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let productsTest = [
  new SuperMarkets(`Sam's Club`, new SuperMarketProducts('TV', 2999)),
  new SuperMarkets('OBA', new SuperMarketProducts('Candy', 29.99)),
  new SuperMarkets('OBA', new SuperMarketProducts('Broccoli', 6.99)),
]

let tvProducts = productsTest.filter(product => product.products.price <= 2999).map(product => product.products.name);

console.log(tvProducts);

