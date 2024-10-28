import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from '../../../../utils/types';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  isOpen = false;
  @Input({required: true}) ticket! : Ticket;
  @Output() markComplete = new EventEmitter<void>()

  toggleSpoiler() {
    this.isOpen = !this.isOpen;
  }

  onMarkComplete() {
    this.markComplete.emit();
  }
}
