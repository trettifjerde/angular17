import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import TemperaturePipe from './temperature.pipe';
import SortPipe from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [DatePipe, SortPipe, TemperaturePipe]
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(temperature: number) {
    if (temperature === 18)
      return;

    const index = this.historicTemperatures.indexOf(temperature);

    if (index === -1) {
      return;
    }
    
    this.historicTemperatures[index] = 18;
  }
}
