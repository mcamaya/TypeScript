const readlineSyn = require("readline-sync");

let manyNumbers: Array<number> = [];
 while (true) {
  let numero:number = Number(readlineSyn.question('Digite un numero cualquiera:\n Dijite 0 para detener el proceso:_'));

  if (numero == 0){
    break
  } else {
    manyNumbers.push(numero);
  }
 }
 let mayorValor:number = manyNumbers.reduce(function(a,b){
  return (a > b) ? a : b;
 });
 let menorValor:number = manyNumbers.reduce(function(a,b){
  return (a < b) ? a : b;
 });
 let cantidad:number = manyNumbers.length
 let suma:number = manyNumbers.reduce(function(a,b){
  return a + b;
 });
 let promedio1:number = suma / cantidad;
 console.log(manyNumbers)
 console.log(`La sumatoria de los ${cantidad.toLocaleString()} valores ingresados es: ${suma.toLocaleString()}`);
 console.log(`El valor promedio de los valores ingresados es ${promedio1.toLocaleString()} `);
 console.log(`Se dijitaron un total de ${cantidad} valores `);
 console.log(`El mayor numero dijitado es: ${mayorValor}`);
 console.log(`El menor numero dijitado es: ${menorValor}`);