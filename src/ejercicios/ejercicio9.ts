const readlineSync = require("readline-sync");

let atletas:Array<object> = [];
let cantidadFinalistas:number = Number(readlineSync.question(`Dijite la cantidad de finalistas del salto triple`))
for (let i = 0; i <cantidadFinalistas;i++){
  let nombre:string = readlineSync.question(`Dijite el nombre del finalista: `);
  nombre = nombre.replace(/\b\w/g, l => l.toUpperCase());
  let marca:number = Number(readlineSync.question(`Dijite la marca de ${nombre} en el salto triple `));
  
  const newAtleta: {
    nombre: string,
    marca: number
  } = {
      nombre,
      marca
  }

  atletas.push(newAtleta);
}
/* let finalistaMarca:object = atletas.reduce(function(a:object,b:object){ 
  return (a.marca > b.marca) ? a : b;
})
console.log(finalistaMarca);
console.log(typeof finalistaMarca);


if  (finalistaMarca.marca > 15.5){
    console.log(`La finalista ${finalistaMarca.nombre} rompio el record de 15.50 metros con una marca de ${finalistaMarca.marca} metros. ¡Gano la medalla de oro!`)
} else {
    console.log (`
    Nadie rompio la meta de 15.5 metros
    El atleta con mayor marca es ${finalistaMarca.nombre} con una marca de ${finalistaMarca.marca} metros
`)
}
 */