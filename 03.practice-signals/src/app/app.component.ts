import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultsComponent } from './results/results.component';
import { RequiredData } from '../utils/types';
import { AnnualData, calculateInvestmentResults } from '../utils/investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, CalculatorComponent, ResultsComponent]
})
export class AppComponent {

  annualData = signal<AnnualData>([]);
  
  calculate(data: RequiredData) {
    this.annualData.set(calculateInvestmentResults(data));
  }
}
