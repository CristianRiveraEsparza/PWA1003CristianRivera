
/*let direccion:any[]=[calle:string='vera', 'pais mexico', 'estado mexico','numero 123' ];
*/

interface IutlAlumno{
    nombre:string;
    edad:number;
    direccion:{};
    mostrarDireccion:()=>void;
}


const pruebaAlumno:IutlAlumno={
    nombre:'Rivera',
    edad:20,
    direccion:{calle:'Duarte ',pais:'Mexico ', estado:'Guanajuato ', numero:'47779160867'},
    
    mostrarDireccion(){
        return this.nombre+','+ this.edad+','+ this.direccion;
    }
    
}

console.table(pruebaAlumno);
        
    

/*function mostrarAlumno(alumno:IutlAlumno){
    alumno.nombre=´Rivera';
}*/


/*
calle:string;
pais:string;
estado:string;
numero:number;

(){
        calle='vera',
        pais='mx',
        estado='huajaca',
        numero='1234',
    },
*/