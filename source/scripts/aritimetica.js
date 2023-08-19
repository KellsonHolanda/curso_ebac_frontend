const calcular = require('./soma.js');

let valor = 5;
const multi = () => valor + 8;
console.log("A soma de 5+8+60 é igual a: ", calcular(multi(valor), 60));


