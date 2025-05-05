import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<investmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enterdDuration = signal('10');
  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enterdDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enterdDuration.set('10');
  }
}
