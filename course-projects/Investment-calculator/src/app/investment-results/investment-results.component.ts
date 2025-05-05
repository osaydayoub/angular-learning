import { CurrencyPipe } from '@angular/common';
import { Component, computed } from '@angular/core';
import { InvestmentService } from '../ivestments.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  // results =this.investmentService.resultsData.asReadonly();
  // or
  results = computed(() => this.investmentService.resultsData());
}
