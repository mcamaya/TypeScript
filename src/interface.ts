interface Song {
    id: number,
    name: string,
    year: number,
    album?: string
}


const solSolecito:Song = {
    id: 222,
    name: 'soleil soleil',
    year: 2020
}

const confianza:Song = {
    id: 0,
    name: "",
    year: 0
}

console.log(solSolecito);


const singer:{
    readonly id: number,
    nombre: string
} = {
    id: 1,
    nombre: 'Lady Gaga'
}

console.log(singer.id);
