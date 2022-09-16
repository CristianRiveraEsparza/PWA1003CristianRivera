class FormulaGeneral{
    private v1:number;
    private v2:number;
    public respuesta;
    public resultado(){
        this.respuesta();
    }

    private valor(){
        this.v1=Math.floor(Math.random()+5);
        this.v2=Math.floor(Math.random()+5);
    }
    public imprimir(){
        console.log(`La respuesta ${this.v1}+${this.v2}= ${this.respuesta}`)
    }
}