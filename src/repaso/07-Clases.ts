class Persona{
    private nombre:string;
    private edad:number;


    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }

    setNombre(a:string){
        this.nombre=a

    }
    getNombre():string{
        return this.nombre;
    }

    private imprimir():void{
        console.log(`nombre: ${this.nombre} y edad: ${this.edad} `);
    }
}
let persona1:Persona;
persona1=new Persona('Dario',22);

let persona2=new Persona('Lau',17);
console.log(persona1.getNombre());
//persona1.edad=23;
//persona1.imprimir();
//persona2.imprimir();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;

    }
    public imprimir(){
        console.log(`salio el valor ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();
