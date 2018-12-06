const fs = require('fs');
const frequencies = fs.readFileSync('freqList.txt').toString().split('\n');

const frequenciesSummed = frequencies.reduce((totalFreq, curFreq) => parseInt(totalFreq) + parseInt(curFreq));

console.log(frequenciesSummed);