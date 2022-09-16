

class Formula{
    private valorA:number;
    private valorB:number;
    private c:number;
    private valorC:number;
    private cero:number;
    private uno:number;
    private dos:number;
    private tres:number;
    private cuatro:number;
    private cinco:number;

    private x1:number;
    private x2:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valorA=Math.floor(Math.random()*3)+1;
        this.valorB=Math.floor(Math.random()*3)+1;
        this.c=Math.floor(Math.random()*3)+1;
        this.valorC=this.c*-1;//tercer valor en negativo

        this.cero=this.valorB*-1;//B en negativo
        this.uno=this.valorB*this.valorB;//B al cuadrado

        this.dos=-4*this.valorA*this.valorC;//-4 por A y por C

        this.tres=this.valorA*2;//se multiplica entre el valor A por dos

        this.cuatro=this.uno+this.dos;//suma del resultado de B negativo y -4 por A y B
        this.cinco=Math.sqrt(this.cuatro);//Se le saca raiz a la operaacion pasada

        this.x1=this.cero+this.cinco/this.tres;
        this.x2=this.cero-this.cinco/this.tres;

    }
    public Valores(){
        console.log(`Valores para la formula ${this.valorA}, ${this.valorB}, ${this.valorC}`);
    }
    public Resultados(){
        console.log(`Valor de X1:${this.x1}, Valor de X2:${this.x2}`);
    }
}

let Formula1=new Formula();
Formula1.tirar();
Formula1.Valores();
Formula1.Resultados();
