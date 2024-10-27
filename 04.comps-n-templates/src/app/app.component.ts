import { Component, OnInit } from '@angular/core';

import HeaderComponent from "./header/header.component";
import ServerStatusComponent from "./dashboard/server-status/server-status.component";
import TrafficComponent from "./dashboard/traffic/traffic.component";
import TicketsComponent from "./dashboard/tickets/tickets.component";
import { ServerStatus } from '../utils/types';
import { getInitTrafficInfo } from '../utils/data';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DashboardItemComponent, HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
})
export class AppComponent implements OnInit {
  currentStatus : ServerStatus = 'offline';
  trafficData = getInitTrafficInfo();

  ngOnInit() {
    setInterval(() => {
      const randomStatus = this.getRandomStatus();
      this.setCurrentStatus(randomStatus);
    }, 5000);
  }

  getRandomStatus() : ServerStatus {
    const randomNumber = Math.random();
    return randomNumber <= 0.33 ? 'online' : randomNumber <= 0.66 ? 'offline' : 'unknown';
  }

  setCurrentStatus(status: ServerStatus) {
    this.currentStatus = status;
  }
}
