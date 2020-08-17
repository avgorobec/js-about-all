function Animal(options) {
    this.name = options.name
    this.age = options.age
}

Animal.prototype.hello = function() {
    return console.log(this.name)
}

const mouse = new Animal({name: 'mimi', age: 1})
console.log(mouse)

/*
* __proto__ каких-то объектов равен prototype каких-то других объектов
* __proto__ - есть у всех объектов
* __proto__ - равен у равных по типу объектов, но отличается у разных объектов по типу
* любой объект создается с помощью функции конструктора или класса
*
* У каждого класса и функции есть свойство prototype и оно уникально для своего класса или функции
* prototype - независимый объект с определенными свойствами и методами
*
* __proto__ любого объекта ссылается на prototype класса, с помощью которого был сконструирован
* */

// Летучка
// console.log({}.prototype === {}.__proto__)  // false
//
// function itFun1() {}
// console.log( itFun1.prototype === itFun1.__proto__)   // false
// console.log( itFun1().__proto__ )                     // Function
//
// function itFun2() {}
// console.log( itFun2.__proto__ === itFun1.__proto__)   // true
// console.log( itFun2.prototype === itFun1.prototype)   // false
//
// let Component = (props) => {
//     return `<div>Prototype</div>`
// }
// console.log( Component.prototype === Object.prototype)  // false
//
// let age = 18
// console.log( age.prototype === Number.prototype)        // false
// console.log( age.__proto__ === Number.prototype)        // true
// console.log( age.__proto__ )
//
// class Hacker {}
//
// console.log( Hacker.__proto__ === Function.prototype)    // true












































