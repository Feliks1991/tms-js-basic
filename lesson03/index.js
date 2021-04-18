'use strict';
/** 
 * Домашнее задание к занятию 3.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/


/**
 * Задание 1
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
*/


// for (let i = 0; i <= 15; i++) {
//    if (i % 2){
//       console.log(`${i} это не четное`)
//    } else{
//       console.log(`${i} это четное`)
//    }
// }


/**
 * Задание 2
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 * Надо написать 2 варианта: с помощью цикла for и while
*/


// for (let i = 0; i <= 100; i++) {
//    if(i%3 === false){
//       console.log('Fizz')
//    }
//    if (i%5 === false){
//       console.log('Buzz')
//    }
//    if(i%3 === false && i%5 === false){
//       console.log('FizzBuzz')
//    }
// }

// let i = 0;
// while (i <= 100) {
//    if (i === 100) {
//       break;
//    }
//    if (i % 3 === false) {
//       console.log('Fizz');
//    }
//    if (i % 5 === false) {
//       console.log('Buzz');
//    }
//    if (i % 3 === false && i % 5 === false) {
//       console.log('FizzBuzz');
//    }
//    i++;
// }


/**
 * Задание 3
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
*/


// let sum4 = 0;
// let sum5 = 0;
// for (let i = 0; i <= 1000; i++) {
//    if (i % 4 == false) {
//       sum4 = sum4 + i;
//    }
//    if (i % 5 == false) {
//       sum5 = sum5 + i;
//    }
//    continue;
// }
// console.log(sum4);
// console.log(sum5);



/**
 * Задание 4
 * Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
*/


// let i = 45;
// while (i <= 67) {
//    if (i == 67) {

//    }
//    console.log(i++);
// }



/**
 * Задание 5*
 * Нарисовать треугольник с помощью цикла.
 * Для рисования использовать символ *(звездочка) и консоль.
 * P.S. Для рисования при каждой итерации цикла необходимо добавлять к переменной один знак "*"
*/
// Пример:
//*
//**
//***
//****
//*****


// let sum = ''
// const i = '*';
// const k = '*****'
// do{
//    sum = sum + i
//    console.log(sum)
// } while (sum <= k);


/**
 * Задание 6
 * Написать функцию, которая будет принимать 2 аргумента и возвращать наименьшее их них
*/


// function minimal(a, b) {
//    return Math.min(a, b);
// }
// const result =  minimal(5, 10);
// console.log(result);


/**
 * Задание 7
 * Написать функцию, которая будет принимать в качестве аргумента объект пользователя вида: {name: 'имя', age: 'возраст'}, а так же 2 коллбэка (success и error)
 * Если возраст больше 18, то надо вызвать коллбэк succcess
 * В противном случае - error
 * success и error коллбэки оформите в качестве alert или console.log
*/


// const user = {
//    name: 'имя',
//    age: 18,
// }

// function callBack(who, yes, no) {
//    if (user.age >= 18) {
//       yes();
//    } else {
//       no();
//    }
// }

// function success() {
//    console.log('success');
// }

// function error() {
//    console.log('error');
// }

// callBack(user, success, error);


/**
 * Задание 8
 * Написать функцию, которая выведет в консоль числа из диапазона от 'a' до 'b'
 * Аргумент 'a' является обязательным, аргумент 'b' по умолчанию имеет значение 30
 * Если нету аргумента 'a', то надо выводить ошибку
 * Надо предусмотреть возможность вывода и обратного диапазона (если 'a' будет больше, чем 'b', то надо вывести цифры в порядке от 'b' до 'a')
 * Если числа равно, то надо вывести соответствующее сообщение.
*/


// const b = 30;
// const a = prompt('Введите число');
// function range(a, b) {
//    if (a < b && a != null) {
//       for (let i = a; i <= b; i++) {
//          console.log(i)
//       }
//    } else if (a > b && a != null) {
//       for (let i = b; i <= a; i++) {
//          console.log(i)
//       }
//    } else if (a === null) {
//       console.log('Ошибка')
//    } else {
//       console.log(`${a} равно ${b}`)
//    }
// }
// const result = range(a, b);


/**
 * Задание 9
 * Написать функцию, которая будет принимать в качестве аргумента объект, удалять все пустые ключи и возвращать этот объект.
 * Пример:
 * { name: 'John', city: 'Minsk', job: '' } => { name: 'Alex', city: 'Minsk' }
*/


// const user = {
//    name: 'John',
//    city: 'Minsk',
//    job: '',
// }

// function deleting() {
//    for(let key in user){
//       if (user[key] == ''){
//          delete user[key];
//          user.name = 'Alex'
//          return (user);
//       }
//    }
// }

// const result = deleting(user);

// console.log(result);


/**
 * Задание 10
 * Написать функцию, которая будет принимать 2 аргумента: объект и ключ
 * Сделать проверку на существание ключа в объекте
 * Если ключ существует необходимо вернуть true, иначе - false
*/


// const user = {
//    name: 'John',
//    age: 42,
//    city: 'Minsk',
// }
// function name(obj, key) {
//    console.log(key in user);
// }
// name(user, 'age');


/**
 * Задание 11
 * Создать объект типа {name: 'John', age: 42, city: 'Minsk'}
 * Клонируйте этот массив в новую переменную. Используйте 2 способа: Object.assign и цикл for in.
*/


// const user = {
//    name: 'John',
//    age: 42,
//    city: 'Minsk'
// }

// const firstClone = {};
// for (let key in user){
//    firstClone[key] = user[key]
// }

// const secondClone = {};
// Object.assign(secondClone, user);