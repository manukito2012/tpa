import { Component } from '@angular/core';
import { Productos } from '../../models/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto1-productos.component.html',
  styleUrl: './punto1-productos.component.css'
})
export class Punto1ProductosComponent {


  producto!:Productos[];
  productos!: Array <Productos>;
  precio_total!: number;
  mensaje!:string;


  constructor(){
    this.iniciarProductos();
    this.productos = new Array<Productos>();
    this.precio_total=0;
    this.mensaje="";

  }

  iniciarProductos():void{
    this.producto=[
      new Productos("SPIDERMAN" , "PETER PARKER VUELVE EN ACCION" , "/assets/productos/prod1.jpg",7000),
      new Productos("FIFA 23" , "JUEGA CON TODOS LOS PLANTELES RENOVADOS" , "/assets/productos/prod2.jpg",16000),
      new Productos("SCKACKBOY" , "DIVIERTETE JUGANDO CARRERA CON LOS NUEVOS AVATARES" , "/assets/productos/prod3.jpg",10000),
      new Productos("UNCHARTED 4" , "JHOS CONTINUA EN BUSCA DE VENGANZA" , "/assets/productos/prod4.jpg",9000),
      new Productos("THE LAST OF US" , "ELIE BUSCA VENGARSE DESPUES DE LA MUERTE DE JOEL" , "/assets/productos/prod5.jpg",20000),
      new Productos("GOD OF WAR 4 " , "KRATOS DEBE ENFRENTAR A SU DESTINO FINAL" , "/assets/productos/prod6.jpg",7000),
      
    ]
  }

  agregarProducto(producto: Productos): void {
    if (!this.verificarExistencia(producto)) {
      this.productos.push(producto);

      this.precio_total += producto.getPrecio();

      this.mensaje = "Se agrego el producto al carrito de compra";
    }
    else {
      this.mensaje = "El producto ya se encuentra en el carrito de compra";
    }
  }

  verificarExistencia(producto: Productos): boolean {
    let existe: boolean = false;

    for (let i: number = 0; i < this.productos.length && existe == false; i++) {
      if (producto.getNombre() == this.productos[i].getNombre()) {
        existe = true;
      }
    }
    return existe;
  }

}
