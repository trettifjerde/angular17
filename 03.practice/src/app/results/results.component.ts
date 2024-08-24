import { Component, Input } from "@angular/core";
import { AnnualData } from "../../utils/investment-results";
import { CurrencyPipe } from "@angular/common";

@Component({
    selector: 'app-results',
    standalone: true,
    templateUrl: './results.component.html',
    styleUrl: 'results.component.css',
    imports: [CurrencyPipe]
})
export class ResultsComponent {
    @Input({required: true}) data!: AnnualData;
}