export class Producto {
    nombre:string;
    precio:number;
    descripcion:string;
    url_foto:string;

    constructor(nombre:string,precio:number,des:string,url:string){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=des;
        this.url_foto=url;
    }

}
