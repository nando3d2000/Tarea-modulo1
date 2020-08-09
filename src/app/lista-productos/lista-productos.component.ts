import { Component, OnInit, Input} from '@angular/core';
import { Producto } from './../Modelos/producto';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{
  
  productos:Producto[];

  constructor(){ 
    this.productos=[];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,precio:number,descripcion:string):boolean{
    let imagen:string;
    imagen="producto"+(this.productos.length+1)+'.'+"jpeg";
    this.productos.push(new Producto(nombre,precio,descripcion,"./../assets/img/"+imagen));
    console.log(this.productos[0].url_foto);

    return false;
  }

}
