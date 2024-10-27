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
  tickets : Ticket[] = [];

  addTicket(ticket: TicketData) {
    this.tickets.push({
      id: new Date().getTime().toString(),
      status: 'open',
      ...ticket
    });

    console.dir(this.tickets);
  }
}
