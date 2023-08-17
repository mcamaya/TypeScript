class Centro {
    constructor(
        public readonly id: number,
        public nombre: string,
        public ciudad: string,
        public cantidadPersonas: number = (Math.floor(Math.random() * 1000)),
        public activo: boolean = true
    ){}
    get Nombre(): string {
        return this.nombre;
    }
    get Ciudad(): string {
        return this.ciudad;
    }

    set Activo(isActivo: boolean){
        this.activo = isActivo;
    }
}

class Ruta {
    constructor(
        public readonly id: number,
        public nombre: string,
        public centro: Array<string> = [],
        public activo: boolean = true
    ){}

    get Nombre(): string {
        return this.nombre;
    }

    set nuevoCentro(centro: string){
        this.centro.push(centro);
    }

    set Activo(isActivo: boolean){
        this.activo = isActivo;
    }
}

class Nivel {
    constructor(
        public readonly id: number,
        public nombre: string,
        public ruta: Array<string> = [],
        public activo: boolean = true
    ){}

    get Nombre(): string {
        return this.nombre;
    }

    set nuevaRuta(ruta: string){
        this.ruta.push(ruta);
    }

    set Activo(isActivo: boolean){
        this.activo = isActivo;
    }
}

class Camper {
    constructor(
        public readonly id: number,
        public nombre: string,
        public nivel: string,
        public activo: boolean = true,
        public finalizado: boolean = false
    ){}

    get Nombre(): string {
        return this.nombre;
    }

    set Nivel(nivel:string){
        this.nivel = nivel;
    }

    set Activo(isActivo: boolean){
        this.activo = isActivo;
    }

    contratar(id: number, ruta: string, modalidad: 'Remoto'| 'Presencial') {
        if(this.finalizado === true){
            let newContratado = new Contrato(id, this.nombre, ruta, modalidad);
            contratos.push(newContratado);
            return console.log(`Camper contratado: ${this.nombre}`);
        } else {
            return console.log(`Camper no ha finalizado el entrenamiento`);
        }
    }
}

class Contrato {
    constructor(
        public readonly id: number,
        public puesto: string,
        public camper: string,
        public modalidad: 'Remoto' | 'Presencial'
    ){}

    set modificarModalidad(mod: 'Remoto' | 'Presencial'){
        this.modalidad = mod;
    }
}

// instancias Centros
let campus = new Centro(1, 'Campuslands', 'Bucaramanga');
let riwi = new Centro(2, 'Riwi', 'Medellín');
let programersPro = new Centro(3, 'Programers Pro', 'Villavicencio');
let devCode = new Centro(4, 'DevCode', 'Bogotá');
let programmingCenter = new Centro(5, 'Programming Center', 'Cali');

let centros: Centro[] = [campus, riwi, programersPro, devCode, programmingCenter];
console.log(centros);

//instancias Rutas
let backendNode = new Ruta(1, "Backend Developer con Nodejs", ["Campus", "riwi"]);
let backendPHP = new Ruta(2, "Backend Developer con PHP", ["Programers Pro", "riwi"]);
let frontendJavascript = new Ruta(3, "Frontend Developer con Javascript", ["Campus", "DevCode"]);
let dataScience = new Ruta(4, "Ciencias de Datos con Python", ["DevCode", "Programming Center"]);
let ciberseguridad = new Ruta(5, "Ciberseguridad", ["Campus", "Programming Center"]);

let rutas: Ruta[] = [backendNode, backendPHP, frontendJavascript, dataScience, ciberseguridad];

//instancias Niveles
let logica = new Nivel(1, "Lógica de Programación",);
let poo = new Nivel(2, "Programación Orientada a Objetos");
let diseño = new Nivel(3, "Diseño web");
let html = new Nivel(4, "Bases HTML");
let Python = new Nivel(5, "Python");

//instancias Camper
let camper1 = new Camper(1, 'Fulano', "Lógica de Programación", true);
let camper2 = new Camper(2, 'Sebas', "Bases HTML", true);
let camper3 = new Camper(3, 'Esteban', "Programación Orientada a Objetos", true);
let camper4 = new Camper(4, 'Daniela', "Diseño web", true);
let camper5 = new Camper(5, 'Vicky', "Bases HTML", true);
let camper6 = new Camper(6, 'Deiby', "Astro Framework");


//instancias Contrato
let contrato1 = new Contrato(1, 'Junior Backend Developer', 'Fulano', 'Remoto');
let contrato2 = new Contrato(2, 'Junior Frontend Developer', 'Sebas', 'Presencial');
let contrato3 = new Contrato(3, 'Junior Data Scientist', 'Esteban', 'Presencial');
let contrato4 = new Contrato(4, 'Junior Backend Developer', 'Daniela', 'Presencial');
let contrato5 = new Contrato(5, 'Junior Backend Developer', 'Vicky', 'Remoto');

let contratos: Contrato[] = [contrato1, contrato2, contrato3, contrato4, contrato5];

camper6.contratar(6, 'Astro Framework', 'Remoto');
console.log('----------------------------------------------------------------');
camper6.finalizado = true;
camper6.contratar(6, 'Astro Framework', 'Remoto');

const reportesContratos = () => {
    let remotosCampers: string[] = [];
    let presencialesCampers: string[] = [];

    contratos.forEach(element => {
        let {modalidad} = element;
        let {camper} = element;
        if (modalidad === 'Remoto') return remotosCampers.push(camper);
        return presencialesCampers.push(camper);
    });
    console.log(`
    ----------------------
    Puestos remotos: ${remotosCampers.length}
    ${remotosCampers}

    Puestos presenciales: ${presencialesCampers.length}
    ${presencialesCampers}
    ----------------------
    `);
    
}

const centroConMayorCantidadPersonas = () => {
    let count: number = 0;
    let greater:Centro = campus;
    centros.forEach(centro =>  {
        if(centro.cantidadPersonas > count){
            count = centro.cantidadPersonas;
            greater = centro;
        }
    });
    console.log(`

    Centro con mayor cantidad de personas: ${greater.nombre}
    N° de personas: ${count}

    `);
    
}

reportesContratos();
centroConMayorCantidadPersonas();
