const readline = require("readline-sync");

let estudiantes:object[] = [];
let cantidadHombres:number = 0;
let cantidadMujeres:number = 0;

let cantidadEstudiantes:number = Number(readline.question('Digite la cantidad de estudiantes que desea registrar: '));

for (let i = 0; i < cantidadEstudiantes; i++) {
  let nombre:string = readline.question(`Digite el nombre del estudiante #${i+1} `);
  nombre = nombre.replace(/\b\w/g, l => l.toUpperCase())
  let sexo:string = readline.question(`Digite el sexo del estudiante #${i+1} (M/F) `)
  while ((sexo != "M" && sexo != "m") && (sexo != "F" && sexo != "f")) {
      sexo = readline.question(`Digite un sexo válido para el estudiante ${i+1} (M/F) o (m/f) `);
    }
    let nota:number = Number(readline.question(`Digite la nota definitiva del estudiante ${i+1} `));
    
    sexo = sexo.toUpperCase();
    let newEstudiante:{
    nombre: string,
    sexo: string,
    readonly nota: number
  } = {
    nombre,
    sexo,
    nota
  }

  estudiantes.push(newEstudiante);

  if (sexo == "M") {
    cantidadHombres++;
  } else {
    cantidadMujeres++;
  }
}
/* 

let estudianteMayorNota:number = Number(estudiantes.reduce(function(a, b) {
  return (a.nota > b.nota) ? a : b;
}));
let estudianteMenorNota:number = Number(estudiantes.reduce(function(a, b) {
  return (a.nota < b.nota) ? a : b;
}));

console.warn(`El estudiante con la mayor nota es ${estudianteMayorNota.nombre} con una nota de ${estudianteMayorNota.nota}`);
console.warn(`El estudiante con la menor nota es ${estudianteMenorNota.nombre} con una nota de ${estudianteMenorNota.nota}`);
console.warn(`La cantidad de hombres es ${cantidadHombres} y la cantidad de mujeres es ${cantidadMujeres}`);
 */