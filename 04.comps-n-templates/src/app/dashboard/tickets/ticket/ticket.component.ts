import { Component, Input } from '@angular/core';
import { Ticket } from '../../../../utils/types';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  open = false;
  @Input({required: true}) ticket! : Ticket;

  toggleSpoiler() {
    this.open = !this.open;
  }
}
