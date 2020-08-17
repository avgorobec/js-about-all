
/*  прототипы в ES5 */
// const Animal = function (options) {
//     this.name = options.name
//     this.color = options.color
//
//     // this.voice = function () {
//     //     console.log('Base voice from', this.name)
//     // }
// }
//
// Animal.prototype.voice = function () {
//     console.log('Base voice from', this.name)
// }
//
// const dog = new Animal({name: 'Rex', color: '#fff'})

//
// const Cat = function (options) {
//     Animal.apply(this, arguments)
//     this.hasTail = options.hasTail
//     this.type = 'cat'
// }
//
// /* Object.create - переопредляет прототип */
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
//
// Animal.prototype.voice = function () {
//     console.log('Base sound goes from: ', this.name)
// }
//
// /* Переопределение метода voice через прототип*/
// Cat.prototype.voice = function () {
//     Animal.prototype.voice.apply(this. arguments)
//     console.log(this.name + ' says myrlik')
// }
//
// const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})
//
// console.log(cat)


/* Вариант на ES6*/

class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }
    
    voice() {
        console.log('Base voice from', this.name)
    }
}

const dog = new Animal({name: 'Rex', color: 'white'})

class Cat extends Animal{
    constructor(options) {
        super(options);
        this.hasTail = options.hasTail
        this.type = 'Cat'
    }

    voice() {
        super.voice()
        console.log(this.name + ' says myrlik')
    }
}

const cat = new Cat({name: 'Murzik', color: '#000', hasTail: true})

/// Примеры как можно добавлять методы для стандартных классов с помощью протомтипов 

Object.prototype.print = function() {
    console.log('I am object: ', this)
}

cat.print()

Array.prototype.mapAndLog = function () {
    console.log('Array to map', this)
    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4, 5, 6].mapAndLog(x => x ** 2))


String.prototype.toTag = function (tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

console.log('Eminem'.toTag('strong'))


Number.prototype.toBigInt = function () {
    return BigInt(this)
}

const number = 42
console.log(number.toBigInt())












