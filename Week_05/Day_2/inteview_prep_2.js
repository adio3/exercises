'use strict';

// 1. Arrays & Set

const checkCharUnicity = string => {
    let check = new Set();

    for (letter of string) {
        if (check.has(letter)) {
            return false;
        } else {
            check.add(letter);
        }
    }
    return true;
};
// console.log(checkCharUnicity('Hi everyone')); // false
// console.log(checkCharUnicity('Hi Marc')); // true

// 2. String

const compression = string => {
    let check = [];
    let counter = 1;
    let cache = [];
    for (letter of string) {
        if (check.includes(letter)) {
            counter++;
        } else if (check.length === 0) {
            check.push(letter);
        } else {
            cache.push(counter);
            counter = 1;
            cache.push(letter);
            check.push(cache);
            cache = [];
        }
    }
    check.push(counter);
    return check;
};

// console.log(compression('aabbbc')); // a2b3c1
// console.log(compression('aaaaaaabbbccccgggffaaaaa')); // a7b3c4g3f2a5

// 3. Array

const removeDuplicates = arr => {
    let returnArr = [];
    while (arr.length > 0) {
        if (!returnArr.includes(arr[0])) {
            returnArr.push(arr[0]);
            arr.shift();
        } else {
            arr.shift();
        }
    }
    return returnArr;
};

// console.log(removeDuplicates(['a', 'b', 'c', 'q', 'a'])); // [ 'a', 'b', 'c', 'q' ]

// 4. Stacks & Queues

/*
stack: last in first out
queue: first in first out
*/

// 5. Bind, apply and call

/*
bind: creates a new function with the values (this) of the provided object.
apply: calls a function with the arguments of provided array.
call: calls a function with the arguments of provided object.
they are useful to access the scope of others
*/

// 6. 1, 2, 3?

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//         console.log(arr[4]);
//     }, 3000);
// }

// 7. Closures

const createBase = (base, arg) => {
    return base + arg;
};

let addSix = createBase(6);

console.log(addSix(10)); // returns 16
addSix(21); // returns 27
