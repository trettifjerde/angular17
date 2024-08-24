import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RequiredData } from "../../utils/types";

@Component({
    selector: 'app-calculator',
    standalone: true,
    styleUrl: './calculator.component.css',
    templateUrl: './calculator.component.html',
    imports: [FormsModule]
})
export class CalculatorComponent {
    initial = 0;
    annual = 0;
    expected = 5;
    duration = 10;

    @Output() submitter = new EventEmitter<RequiredData>();

    onSubmit() {
        const data = {
            initialInvestment: this.initial,
            annualInvestment: this.annual,
            expectedReturn: this.expected,
            duration: this.duration
        };
        this.submitter.emit(data);
    }
}