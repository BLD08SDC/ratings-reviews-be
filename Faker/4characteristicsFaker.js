const faker = require('faker');
const fs = require('fs');

let index = 1;
let increment = () => (index += 1);

let fkIndex = 1;
let fkIncrement = () => (fkIndex += 1)

for (let i = 1; i < 10000001; i += 1) {
    fs.appendFileSync('csv-files/generated-characteristics.csv', `${index2},${fkIndex},"Fit"\n`);
    increment();

    fs.appendFileSync('csv-files/generated-characteristics.csv', `${index2},${fkIndex},"Length"\n`);
    increment();

    fs.appendFileSync('csv-files/generated-characteristics.csv', `${index2},${fkIndex},"Comfort"\n`);
    increment();

    fs.appendFileSync('csv-files/generated-characteristics.csv', `${index2},${fkIndex},"Quality"\n`);
    increment();

    fkIncrement();
}