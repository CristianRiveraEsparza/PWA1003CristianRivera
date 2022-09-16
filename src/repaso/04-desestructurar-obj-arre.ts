
interface Detalles{
    autor: string;
    anio:number;

}

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles:Detalles;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'XD',
    detalles:{
        autor:'Etesech',
        anio:345,

    }
}

const{cancion,volumen,segundo,detalles}=reproductor;

const{autor,anio}=detalles;

console.table('el nombre de la cancion: '+cancion);
console.table('el nombre de la cancion: '+volumen);
console.table('el nombre de la cancion: '+autor);

const dbz:string[]=['goku','vegeta','krilin','yamcha'];

console.log('personaje 1', dbz[0]);
console.log('personaje 1', dbz[1]);

const[p1,p2]=dbz;

console.log('personaje 1', p1);
console.log('personaje 1', p2);