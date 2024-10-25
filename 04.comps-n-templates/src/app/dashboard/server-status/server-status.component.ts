import { Component, Input } from '@angular/core';
import { ServerStatus } from '../../../utils/types';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
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
