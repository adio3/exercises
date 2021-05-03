// 1. Am I a String?

const isString = arg => console.log(typeof arg === 'string')

// isString('hello'); // => true
// isString(['hello']); // => false
// isString('this is a long sentence'); // => true
// isString({ a: 2 }); // => false

// 2. Check for Array

const isArray = arg => console.log(Array.isArray(arg))

// isArray('hello'); // => false
// isArray(['hello']); // => true
// isArray([2, {}, 10]); // => true
// isArray({ a: 2 }); // => false

// 3. Check for Types in Array

const areSameType = arg => {
    let returnedValue = true
    for (let i=0; i < arg.length; i++){

        returnedValue ? (typeof arg[0] !== typeof arg[i] ? returnedValue = false: returnedValue = true): returnedValue = false
    }
    console.log(returnedValue)
}

// areSameType(['hello', 'world', 'long sentence']) // => true
// areSameType([1, 2, 9, 10]) // => true
// areSameType([['hello'], 'hello', ['bye']]) // => false
// areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true

// 4. Sort and Remove Duplicated Characters

const longest = (a, b) => {
    let newArray = a.concat(b);
    let cleanArray = []

    for(let i in newArray){
        if (!cleanArray.includes(newArray[i])) {cleanArray.push(newArray[i])}
    }
    cleanArray.sort()

    console.log(String(cleanArray).replaceAll(',',''))
}

// longest('abcccaa', 'acddddffzzz') // => 'abcdfz'

// a = 'xyaabbbccccdefww'
// b = 'xxxxyyyyabklmopq'
// longest(a, b) // => 'abcdefklmopqwxy'

// a = 'abcdefghijklmnopqrstuvwxyz'
// longest(a, a) // => 'abcdefghijklmnopqrstuvwxyz'

// 5. Convert Number to Reversed Array of Digits

const convert = arg => {
    let stringArg = String(arg)
    let convertedArray = []
    for (let i=0; i<stringArg.length; i++){
        convertedArray.push(parseInt(stringArg[i]))
    }
    convertedArray.sort().reverse()
    console.log(convertedArray)
}

// convert(429563) // => [9, 6, 5, 4, 3, 2]
// convert(324) // => [4, 3, 2]

// 6. Count Repetitions

let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

const repearingValues = () => {
    let repetitionDict = {}
    for(let i in authors){
        if (repetitionDict[authors[i]]){
            repetitionDict[authors[i]] = repetitionDict[authors[i]]+1
        }
        else{
            repetitionDict[authors[i]] = 1
        }
    }
    console.log(repetitionDict)
}

// repearingValues()

// 7. Cat and Mouse

const isCaught = (catMouse) => {
    let counter = 0
    const index = catMouse.indexOf('C')
    for (let i = index; i<catMouse.length; i++){
        if ((catMouse[i]) === '.'){counter = counter + 1}
    }
    let isTrue = counter <= 3
    console.log(isTrue)
}

// isCaught('C.....m') // => false
// isCaught('C..m') // => true
// isCaught('..C..m') // => true

// 8. Split the Bill

const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

const splitTheBill = (inputGroup) => {
    let totalAmount = 0
    let peopleCount = 0
    for(key in inputGroup){
        totalAmount = totalAmount + inputGroup[key]
        peopleCount = peopleCount +1
    }
    let splited = totalAmount / peopleCount
    for(key in inputGroup){
        inputGroup[key] = inputGroup[key] - splited
    }
    console.log(inputGroup)
}

// splitTheBill(group); // => { Amy: -5, Bill: 0, Chris: 5 }

// 9. Exponentiation

const exp = (b, n, r=b) =>{
    if (n > 1) {
        r = r*b
        n = n-1
        exp(b, n, r)
    }
    else if (n < 1){
        r = 1
        console.log(r)
    }
    else{
        console.log(r)
    }
}

// exp(5, 3); // => 125
// exp(2, 4); // => 16
// exp(5, 1); // => 5
// exp(6, 0); // => 1

// 10. Pig Latin

const translatePigLatin = (word) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let newWord = word
    if(vowels.includes(word[0])){
        return console.log(word + 'way')
    }
    else{
        for(i in word){
            if (vowels.includes(word[i])) {
                newWord = newWord + 'ay'
                break
            }
            else{
                newWord = newWord.concat(word[i]).slice(1)
            }
        }
    }
    console.log(newWord)
}

// translatePigLatin("glove"); // oveglay
// translatePigLatin("pig"); // igpay

// 11. Search and Replace

const myReplace = (string, toReplace, replacedWith) =>{
    let returnedString = string.replace(toReplace, (replacedWith.charAt(0).toUpperCase() + replacedWith.slice(1)))
    console.log(returnedString)
}

// myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // "He is Sitting on the couch"

// 12. Translate to English

const toEnglish = (binaryString) => {
    let binaryArray = binaryString.split(' ')
    let numericalArray = []
    let returnString = ''
    for(i in binaryArray){
        numericalArray.push(parseInt(binaryArray[i], 2))
    }
    for(i in numericalArray){
        returnString = returnString + String.fromCharCode(numericalArray[i])
    }
    return returnString
}


// console.log(toEnglish("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")); // Aren't bonfires fun!?

// 13.Confirm the Ending

// const confirmEnding = (string, ending) => {
//     let truther = true
//     for (let i in ending) {
//         if(string[(string.length-i)-1] !== ending[(ending.length-i)-1]){
//             truther = false
//             break
//         }
//     }
//     console.log(truther)
// }

const confirmEnding = (str, x) => str.substring(str.length, str.length - x.length) === x ? console.log(true) : console.log(false)
// hint from Karim: better use String.prototype.substring()

// confirmEnding("Open sesame", "same"); // true

// 14. Diff Two Arrays

const diffArray = (arr1, arr2) =>{
    let returnedArray = []
    const compareArray = (firstArray, secondArray) => {
        for(let i in firstArray){
            if (!secondArray.includes(firstArray[i])){
                returnedArray.push(firstArray[i])
            }
        }
    }
    compareArray(arr1, arr2);
    compareArray(arr2, arr1);
    console.log(returnedArray)
}

diffArray(
      ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
      ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    ) // [ 'pink wool', 'diorite' ]