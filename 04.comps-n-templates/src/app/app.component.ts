import { Component } from '@angular/core';

import HeaderComponent from "./header/header.component";
import ServerStatusComponent from "./dashboard/server-status/server-status.component";
import TrafficComponent from "./dashboard/traffic/traffic.component";
import TicketsComponent from "./dashboard/tickets/tickets.component";
import { ServerStatus, TrafficInfo } from '../utils/types';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
})
export class AppComponent {
  trafficData : TrafficInfo[] = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  currentStatus : ServerStatus = 'online';
}
