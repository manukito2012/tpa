import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketServicesService } from '../../services/ticket-services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-punto3-tiket-listados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3-tiket-listados.component.html',
  styleUrl: './punto3-tiket-listados.component.css'
})
export class Punto3TiketListadosComponent {

    tickets!: Array<Ticket>;

    constructor(private ticketServices: TicketServicesService,
      private router:Router){

        this.tickets = new Array <Ticket>();
        this.cargarTickets();
        
    }

    /**
     * METODO QUE CARGA LA LISTA DE LOS DATOS TICKETS CARGADOS 
     */
    cargarTickets():void{
      this.tickets= this.ticketServices.getTickets();
    }

    /**
     * METODO QUE REDIRECCIONA AL FORMULARIO DE COMPRA
     */
    comprarTicket():void{
      this.router.navigate(['ticket',0]);
    }

    /**
   * Metodo que redirecciona al formulario de compra para realizar una modificacion
   * 
   * @param ticket 
   */
  modificarCompra(ticket: Ticket): void {
    this.router.navigate(['ticket', ticket.getId()]);
  }

  eliminarCompra(ticket: Ticket): void {
    this.ticketServices.deleteTicket(ticket.getId());
  }

    





}
