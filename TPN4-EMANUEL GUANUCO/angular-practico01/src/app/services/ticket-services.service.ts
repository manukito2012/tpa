import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServicesService {

  ticket!:Ticket;
  tickets!:Array<Ticket>;
  constructor() { 
    this.tickets= new Array <Ticket>();

  }


  getTickets(): Array<Ticket> {
    return this.tickets;
  }

/**
   * Metodo que retorna un ticket, de acuerdo a su id
   * 
   * @param id 
   * @returns 
   */
  getTicket(id: number): Ticket {
    let ticket: Ticket = new Ticket("", 0, "l");

    let indexTicket: number = this.tickets.findIndex(t => (t.getId() == id));
    
    ticket = this.tickets[indexTicket];
    return ticket;
  }

  /**
   * Metodo que agrega un ticket a la lista
   * 
   * @param ticket 
   */
  addTicket(ticket: Ticket): void {
    ticket.setId(this.getIdDisponible());

    this.tickets.push(ticket);
  }

  /**
   * Metodo para obtener una id disponible
   * 
   * @returns 
   */
  getIdDisponible(): number {
    let maxid: number;
    maxid = 0;
    for (let i = 0; i < this.tickets.length; i++) {
      if (maxid < this.tickets[i].getId()) {
        maxid = this.tickets[i].getId();
      }
    };
    return (maxid + 1);
  }
  /**
   * Metodo para eliminar una compra de ticket
   * 
   * @param id 
   */
  deleteTicket(id: number): void {
    this.tickets.splice(this.obtenerPosicion(id), 1);
  }

  /**
   * Metodo para obtener obtener la posicion del objeto a eliminar
   * 
   * @param id 
   *  
   */
  obtenerPosicion(id: number): number {
    let posicion: number = 0;

    let indexD: number = this.tickets.findIndex(t => (t.getId() == id));
    
    posicion = indexD;
    
    return posicion;    
  }

  /**
     * Metodo que actualiza un ticket de la lista
     * 
     */
  updateTicket(ticket: Ticket): void {
    this.tickets[this.obtenerPosicion(ticket.getId())] = ticket;
  }
  






}


