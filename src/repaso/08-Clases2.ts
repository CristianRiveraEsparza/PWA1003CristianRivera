class tabla{
    private numero:number;
    public temporal:number;

    setNumero(a:number){
        this.numero=a

    }
    getNumero():number{
        return this.numero;
    }
    calcular():void{

        for (let i = 0; i < 11; ++i) {
            console.log(`${this.numero} x ${i} = ${i*this.numero}`);
        }

        let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} = ${s*this.numero}`);
            ++s;   
        }

    }


}


let tabla1=new tabla();

tabla1.setNumero(7);
console.log('variable privada:'+tabla1.getNumero());

tabla1.temporal=5;
console.log('variable publica:'+tabla1.temporal);

console.log(tabla1.calcular());
