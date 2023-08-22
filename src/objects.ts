// object (array)
let myArr = ['hola', 5, true]

let goleadores:string[] = ['Joel', 'Maicol', 'Phidolly'];
let goles:number[] = [5, 9, 7]

console.log(`
    \tGoleadores: ${goleadores}
    \tGoles: ${goles}
`);

let corners:number[] = [6,2,4];

//alternativa
let penalties: Array<boolean> = [true, true, false];

console.log(`
    ${goleadores[0]} -> Goles: ${goles[0]} -> Penalti: ${penalties[0]}
    ${goleadores[1]} -> Goles: ${goles[1]} -> Penalti: ${penalties[1]}
    ${goleadores[2]} -> Goles: ${goles[2]} -> Penalti: ${penalties[2]}
`);


console.log(goles.map(element => element.toString()));

let goleadoresID = [7,10,11]
goleadoresID.push(+'1');

console.log(`${goleadoresID}\n\n`);


//objectos...........................................................................................................................................................

const canciones = {
    id: 1,
    nombre: 'I wanna be your slave',
    autor: 'Maneskin'
}
console.log(canciones);
