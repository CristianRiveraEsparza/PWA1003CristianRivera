function nombres():void{
    console.log('nombres');
}

function sumar(num1:number,num2:number=5):number{
    return num1+num2;
}



//console.log(sumar(10,3));

/*function resta(num1:number,num2:number,num3?:number):number{
    if(num3){
        return num1-num2-num3;
    }
    else{
        return num1-num2;
    }
}*/

function resta(num1:number,num2:number,num3:number=0):number{

        return num1-num2-num3;

}

const sumarFlecha=(a:number,b:number):number=>{
    return a+b;
}

/*console.log(resta(10,5));
console.log(resta(10,5,2));*/

interface escuelaAlumno{
    nombre:string;
    email?:string;
    edad:number;
    saludar:()=>void;
}

function alumnoUTL(alumno:escuelaAlumno,calificar:number):void{

    alumno.nombre='mario';
    alumno.email='Mario@gmail.com';
    alumno.edad=calificar;

}

const nuevoAlumno:escuelaAlumno={
    nombre:'Dario',
    edad:23,
    saludar(){
        console.log('xDdD')
    },
}