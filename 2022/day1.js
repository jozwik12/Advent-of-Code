const f = require('fs');
const readline = require('readline');
var mainArray = [];
var subArray = [];
var user_file = './day1.txt';
var r = readline.createInterface({
    input: f.createReadStream(user_file)
});
r.on('line', function (text) {
    if (!!text) {
        subArray.push(text)
    } else {
        mainArray.push(subArray);
        subArray = [];
    }
}).once('close', () => {
    var sumArray = [];
    mainArray.forEach((elem) => {
        let sum = 0;
        elem.forEach((subElem) => {
            sum += parseInt(subElem, 10);
        })
        sumArray.push(sum)
    })
    sumArray.sort((a,b)=>b-a)
    const result = sumArray[0] + sumArray[1] + sumArray[2]
    console.log(result)
});