import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PalabrasJuego } from '../../models/palabras-juego';
import { Selecciones } from '../../models/selecciones';

@Component({
  selector: 'app-punto2-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2-juego.component.html',
  styleUrl: './punto2-juego.component.css'
})
export class Punto2JuegoComponent {

  palabra!:PalabrasJuego;
  palabras!:PalabrasJuego[];
  selecciones!:Selecciones[];

  constructor(){
    this.cargarPalabras();
    this.cargarOpciones();

  }

  /**
   * En este metodo se cargara las 10 palabras en una lista
   * 
   */
  cargarPalabras(): void {
    this.palabras = [
      new PalabrasJuego("BANANA", 3, 3, 6, 3),
      new PalabrasJuego("JOYA", 2, 2, 4, 2),
      new PalabrasJuego("FUTBOL", 2, 4, 6, 2),
      new PalabrasJuego("CANGREJO", 3, 5, 8, 3),
      new PalabrasJuego("ARTESANO", 4, 4, 8, 4),
      new PalabrasJuego("COCO", 2, 2, 4, 2),
      new PalabrasJuego("GOMA", 2, 2, 4, 2),
      new PalabrasJuego("MASCOTA", 3, 4, 7, 3),
      new PalabrasJuego("CARNICERIA", 5, 5, 10, 5),
      new PalabrasJuego("ESCUELA", 4, 3, 7, 3)
    ]
  }

  /**
   * Metodo que cargara las opciones del juego (Numeros del 1 al 10)
   * 
   */
  cargarOpciones(): void {
    this.selecciones = [
      new Selecciones("/assets/img/01juego.png", 1),
      new Selecciones("/assets/img/02juego.png", 2),
      new Selecciones("/assets/img/03juego.png", 3),
      new Selecciones("/assets/img/04juego.png", 4),
      new Selecciones("/assets/img/05juego.png", 5),
      new Selecciones("/assets/img/06juego.png", 6),
      new Selecciones("/assets/img/07juego.png", 7),
      new Selecciones("/assets/img/08juego.png", 8),
      new Selecciones("/assets/img/09juego.png", 9),
      new Selecciones("/assets/img/10juego.png", 10)
    ]
  }
  /**
   * METODO QUE INICIARA EL JUEGO CON LAS VARIABLES
   */
  IniciarJuego():void{

  }

  /**
   * 
   */
  





}
