import { Component, Input, OnInit } from '@angular/core';
import { TrafficInfo } from '../../../utils/types';

@Component({
  selector: 'app-traffic',
  standalone: true,
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export default class TrafficComponent implements OnInit {
  maxTraffic = 0;
  @Input({required: true}) trafficData! : TrafficInfo[];

  ngOnInit() {
    this.maxTraffic = Math.max(...this.trafficData.map((data) => data.value));
  }

  getColumnHeight(value: number) {
    return this.maxTraffic === 0 ? '0%' : (value / this.maxTraffic) * 100 + '%'
  }
}
