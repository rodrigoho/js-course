class Car {
    constructor(maker, model, color) {
        this._maker = maker;
        this._model = model;
        this._color = color;
    }

    setMaker(maker) {
      this._maker = maker;
    }
    
    setModel(model) {
      this._model = model;
    }

    setColor(color) {
      this._color = color;
    }

    get maker() {
      return this._maker;
    }

    get model() {
      return this._model;
    }

    get color() {
      return this._color;
    }
}

let car1 = new Car('Volkswagen', 'Fox Pepper', 'Storm Red');
console.log(car1.maker + ' ' + car1.model + ' ' + car1.color);

let car2 = new Car();
car2.setMaker('Audi');
car2.setModel('RS3');
car2.setColor('Pearl White');
console.log(car2.maker + ' ' + car2.model + ' ' + car2.color);

