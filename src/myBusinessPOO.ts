class NasaAstronauts {
    constructor(
        public readonly id: number,
        public nombre: string,
        public añoNacimiento: number,
        private _record: string
    ){}

    get myRecord():string{
        return this._record;
    }

    set newRecord (record:string){
        this._record = record.toLowerCase();
        console.log(this._record);

        this.recibePremio(this._record);
    }

    recibePremio(record: string){
        if(record === 'artemis')return console.log('FELICITACIONES!! Ha llegado a Artemis y ha ganado un panzerotti!');
        console.log('¿Que dijo?, ¿navidad?');
    }
}

const myAstronaut = new NasaAstronauts(1, "Camilita", 2005, "Ninguno por el momento");

myAstronaut.newRecord = 'Neptuno';
console.log('-----------------------------------');
myAstronaut.newRecord = 'artEmis'