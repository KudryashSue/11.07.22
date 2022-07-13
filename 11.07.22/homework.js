//1. Реализуйте класс Car (Машина), который будет иметь следующие свойства:
// name (марка), model (модель), country (страна изготовитель), volume (объем двигателя)
// Создайте экземпляр этого класса
// Выведете в консоль все свойства созданного класса

class Car {
    constructor(name, model, country, volume){
        this.name = name;
        this.model = model;
        this.country = country;
        this.volume = volume;
    }
}

let car = new Car('Mercedes', 'A140', 'Germany', '1,6 l');

console.log(car.name);
console.log(car.model);
console.log(car.country);
console.log(car.volume);

//2. Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
// Создайте 3 экземпляра этого класса с разными свойствами
// Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса

class Country {
    constructor(name, capital, population, climate){
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climate = climate;
    }
}

let country_1 = new Country('Germany', 'Berlin', '83 mln.', 'temperate');
let country_2 = new Country('Australia', 'Canberra', '26 mln.', 'tropical');
let country_3 = new Country('Ireland', 'Dublin', '5 mln.', 'mild temperate');

console.log(country_1.name);
console.log(country_2.capital);
console.log(country_3.climate);
