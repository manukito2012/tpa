import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketServicesService } from '../../services/ticket-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto3-tiket',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './punto3-tiket.component.html',
  styleUrl: './punto3-tiket.component.css'
})
export class Punto3TiketComponent {

  ticket!: Ticket;
  accion!: string;

  constructor(private ticketService:TicketServicesService, private activatedRoute : ActivatedRoute,
    private router : Router){

      this.ticket = new Ticket("", 0, "l");
      this.accion = "new";


     }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if (params['id'] == "0") {
          this.accion = "new";
        } else {
          this.accion = "update";

        this.cargarTicket(params['id']);
        }
      });
    }

    /**
   * Aqui carga los datos de una compra de ticket en el formulario
   */

    cargarTicket(id:number):void{
      this.ticket= this.ticketService.getTicket(id);

    }

    /**
   * Metodo que guarda un ticket en la lista, mediante el serviceTicket
   * 
   */
    guardarTicket(): void {
      this.ticket.setFechaCobro(new Date());
      this.ticketService.addTicket(this.ticket);
      this.router.navigate(['ticket-lista']);

    }
      /**
     * Metodo que calcula el descuento del precioCobrado, segun el tipo
     * 
     */
    calcularDescuento(): void {
      this.ticket.setPrecioCobrado(this.ticket.getPrecioReal());

      if (this.ticket.getTipoEspectador() == 'l') {
        this.ticket.setPrecioCobrado(this.ticket.getPrecioReal() - (this.ticket.getPrecioReal() * 0.2));
        
      }
    }
    /**
     * Metodo que verifica si las condiciones para mostrar el calculo del precio a cobrar se cumple 
     * en caso que cambie de espectador
     */
    comprobarDescuento(): boolean {
      if (this.ticket.getPrecioReal() > 0 && this.ticket.getTipoEspectador() != '-') {
        return true;
      } else {
        return false;
      }
    }

    /**
     * modifica el ticket seleccionado
     */
    actualizarTicket(): void {
      this.ticketService.updateTicket(this.ticket)
      this.router.navigate(['ticket-lista'])
  
    } 
  
    /**
     * Metodo que retorna a la lista de tickets
     * 
     */
    volverALista(): void {
      this.router.navigate(['ticket-lista']);
    }











}
