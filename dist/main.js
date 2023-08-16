"use strict";
class Centro {
    constructor(id, nombre, ciudad, cantidadPersonas = (Math.floor(Math.random() * 1000)), activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.cantidadPersonas = cantidadPersonas;
        this.activo = activo;
    }
    get Nombre() {
        return this.nombre;
    }
    get Ciudad() {
        return this.ciudad;
    }
    set Activo(isActivo) {
        this.activo = isActivo;
    }
}
class Ruta {
    constructor(id, nombre, centro = [], activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.centro = centro;
        this.activo = activo;
    }
    get Nombre() {
        return this.nombre;
    }
    set nuevoCentro(centro) {
        this.centro.push(centro);
    }
    set Activo(isActivo) {
        this.activo = isActivo;
    }
}
class Nivel {
    constructor(id, nombre, ruta = [], activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.ruta = ruta;
        this.activo = activo;
    }
    get Nombre() {
        return this.nombre;
    }
    set nuevaRuta(ruta) {
        this.ruta.push(ruta);
    }
    set Activo(isActivo) {
        this.activo = isActivo;
    }
}
class Camper {
    constructor(id, nombre, nivel, activo = true) {
        this.id = id;
        this.nombre = nombre;
        this.nivel = nivel;
        this.activo = activo;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nivel(nivel) {
        this.nivel = nivel;
    }
    set Activo(isActivo) {
        this.activo = isActivo;
    }
}
class Contrato {
    constructor(id, puesto, camper, modalidad) {
        this.id = id;
        this.puesto = puesto;
        this.camper = camper;
        this.modalidad = modalidad;
    }
    set modificarModalidad(mod) {
        this.modalidad = mod;
    }
}
// instancias Centros
let campus = new Centro(1, 'Campuslands', 'Bucaramanga');
let riwi = new Centro(2, 'Riwi', 'Medellín');
let programersPro = new Centro(3, 'Programers Pro', 'Villavicencio');
let devCode = new Centro(4, 'DevCode', 'Bogotá');
let programmingCenter = new Centro(5, 'Programming Center', 'Cali');
let centros = [campus, riwi, programersPro, devCode, programmingCenter];
console.log(centros);
//instancias Rutas
let backendNode = new Ruta(1, "Backend Developer con Nodejs", ["Campus", "riwi"]);
let backendPHP = new Ruta(2, "Backend Developer con PHP", ["Programers Pro", "riwi"]);
let frontendJavascript = new Ruta(3, "Frontend Developer con Javascript", ["Campus", "DevCode"]);
let dataScience = new Ruta(4, "Ciencias de Datos con Python", ["DevCode", "Programming Center"]);
let ciberseguridad = new Ruta(5, "Ciberseguridad", ["Campus", "Programming Center"]);
let rutas = [backendNode, backendPHP, frontendJavascript, dataScience, ciberseguridad];
//instancias Niveles
let logica = new Nivel(1, "Lógica de Programación");
let poo = new Nivel(2, "Programación Orientada a Objetos");
let diseño = new Nivel(3, "Diseño web");
let html = new Nivel(4, "Bases HTML");
let Python = new Nivel(5, "Python");
//instancias Camper
let camper1 = new Camper(1, 'Fulano', "Lógica de Programación");
let camper2 = new Camper(2, 'Sebas', "Bases HTML");
let camper3 = new Camper(3, 'Esteban', "Programación Orientada a Objetos");
let camper4 = new Camper(4, 'Daniela', "Diseño web");
let camper5 = new Camper(5, 'Vicky', "Bases HTML");
//instancias Contrato
let contrato1 = new Contrato(1, 'Junior Backend Developer', 'Fulano', 'Remoto');
let contrato2 = new Contrato(2, 'Junior Frontend Developer', 'Sebas', 'Presencial');
let contrato3 = new Contrato(3, 'Junior Data Scientist', 'Esteban', 'Presencial');
let contrato4 = new Contrato(4, 'Junior Backend Developer', 'Daniela', 'Presencial');
let contrato5 = new Contrato(5, 'Junior Backend Developer', 'Vicky', 'Remoto');
let contratos = [contrato1, contrato2, contrato3, contrato4, contrato5];
const reportesContratos = () => {
    let remotosCampers = [];
    let presencialesCampers = [];
    contratos.forEach(element => {
        let { modalidad } = element;
        let { camper } = element;
        if (modalidad === 'Remoto')
            return remotosCampers.push(camper);
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
};
const centroConMayorCantidadPersonas = () => {
    let count = 0;
    let greater = campus;
    centros.forEach(centro => {
        if (centro.cantidadPersonas > count) {
            count = centro.cantidadPersonas;
            greater = centro;
        }
    });
    console.log(`

    Centro con mayor cantidad de personas: ${greater.nombre}
    N° de personas: ${count}

    `);
};
reportesContratos();
centroConMayorCantidadPersonas();
