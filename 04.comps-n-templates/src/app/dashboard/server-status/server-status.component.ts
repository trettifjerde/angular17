import { Component, Input } from '@angular/core';
import { ServerStatus } from '../../../utils/types';

@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export default class ServerStatusComponent {
  @Input({required: true}) currentStatus!: ServerStatus;

  getClasses() {
    return {
      status: true,
      'status-online': this.currentStatus === 'online',
      'status-offline': this.currentStatus === 'offline',
      'status-unknown': this.currentStatus === 'unknown'
    }
  }
}
