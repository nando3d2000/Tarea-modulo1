import { Component, OnInit, Input, HostBinding} from '@angular/core';
import { Producto } from '../Modelos/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto:Producto;
  @HostBinding('attr.class') cssClass='col-md-4';

  constructor() { }

  ngOnInit(): void {
  }

}
