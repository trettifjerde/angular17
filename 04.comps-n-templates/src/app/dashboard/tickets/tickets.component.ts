import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket, TicketData } from '../../../utils/types';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export default class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticket: TicketData) {
    this.tickets.push({
      id: new Date().getTime().toString(),
      status: 'open',
      ...ticket
    });
  }

  onMarkComplete(id: string) {
    const ticketI = this.tickets.findIndex(t => t.id === id);

    if (ticketI === -1)
      return;

    const ticket = this.tickets[ticketI];
    
    this.tickets.splice(ticketI, 1, { 
      ...ticket, 
      status: 'closed' 
    });
  }
}
