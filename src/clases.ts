import axios from "axios";
import { ApispacexResponse } from "./interfaces/apispacex-response.interface";

export class Astronauta {
    constructor(
        public readonly id: number,
        public nombre: string,
        public añoNacimiento: number,
        private _record: string,
        public mision: string[] = []
    ){}

    get myRecord():string{
        return this._record;
    }

    set newRecord (record:string){
        this._record = record.toLowerCase();
        console.log(this._record);

        this.recibePremio(this._record);
    }

    async obtenerLanzamientos(){
        const url = 'https://api.spacexdata.com/v3/launches';
        const {data} = await axios.get<ApispacexResponse[]>(url);
        this.mision = data.map(e => e.mission_name);
        console.log(this.mision);
        return this.mision;
    }

    recibePremio(record: string){
        if(record === 'artemis')return console.log('FELICITACIONES!! Ha llegado a Artemis y ha ganado un panzerotti!');
        console.log('¿Que dijo?, ¿navidad?');
    }
}

const myAstronaut = new Astronauta(1, "Camilita", 2005, "Ninguno por el momento");

myAstronaut.newRecord = 'Neptuno';
console.log('-----------------------------------');
myAstronaut.newRecord = 'artEmis';
myAstronaut.obtenerLanzamientos();