const f = require('fs');
const readline = require('readline');
var mainArray = [];
let result = 0;
var user_file = './day2.txt';
var r = readline.createInterface({
    input: f.createReadStream(user_file)
});

//part 2
let shapeMap = {
    'AX': 3,
    'AY': 1,
    'AZ': 2,
    'BX': 1,
    'BY': 2,
    'BZ': 3,
    'CX': 2,
    'CY': 3,
    'CZ': 1
}
let outcomeMap = {
    'X': 0,
    'Y': 3,
    'Z': 6
}

r.on('line', function (text) {
    mainArray.push(text.replace(' ', ''))
}).once('close', () => {
    mainArray.forEach((elem) => {
        result += outcomeMap[elem[1]] + shapeMap[elem]
    })
    console.log(result)
});

// part 1
// let outcomeMap = {
//     'AX': 3,
//     'AY': 6,
//     'AZ': 0,
//     'BX': 0,
//     'BY': 3,
//     'BZ': 6,
//     'CX': 6,
//     'CY': 0,
//     'CZ': 3
// }
// let shapeMap = {
//     'X': 1,
//     'Y': 2,
//     'Z': 3
// }

// r.on('line', function (text) {
//     mainArray.push(text.replace(' ', ''))
// }).once('close', () => {
//     mainArray.forEach((elem) => {
//         result += outcomeMap[elem] + shapeMap[elem[1]]
//     })
//     console.log(result)
// });