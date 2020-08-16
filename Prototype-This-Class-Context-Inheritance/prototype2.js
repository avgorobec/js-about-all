// const person = {
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

// Object.prototype.sayHello = function () {
//     console.log('Hello!')
// }
//
// const person = new Object({
//     name: 'Maxim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// })
//
// const lena = Object.create(person)
// lena.name = 'Elena'
//
// const str = new String('I am string')


/* ***************************************************** */


function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'alex',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Name is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23
}

// Передача контекста и параметров через bind
// const fnLenaInfoLog = person.logInfo.bind(lena, 'FrontEnd', '8-999-9999-99-99')
// Вызов 
// fnLenaInfoLog()

// Передача контекста и параметров через call
// person.logInfo.call(lena, 'FrontEnd', '8-999-9999-99-99')


// Передача контекста и параметров через apply
person.logInfo.apply(lena, ['FrontEnd', '8-999-9999-99-99'])


/*  Example */

const array = [1, 2, 3, 4, 5, 6]

Array.prototype.multBy = function (n) {
    return this.map(i => i * n)
}

array.multBy(2)

/*  Замыкания  */

// №1
// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }

// const calc = createCalcFunction(42)
// calc() 

// #2
// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
//
// console.log(addOne(42))

// №3
// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
//
// console.log(comUrl('google'))
// console.log(comUrl('yandex'))

// №4
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Алексей', age: 33, job: 'То там, то сям'}

function bind(context, fun) {
    return function (...args) {
        fun.apply(context, args)
    }
}

bind(person1, logPerson)()












