import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  @Input() rates: any;
  amount1: number = 0;
  amount2: number = 0;
  currency1: string = 'USD';
  currency2: string = 'UAH';

  constructor() {}

  ngOnInit(): void {
    this.convertCurrency1();
  }

  convertCurrency1() {
    this.amount2 = parseFloat(
      (
        (this.amount1 * this.rates[this.currency2]) /
        this.rates[this.currency1]
      ).toFixed(2)
    );
  }

  convertCurrency2() {
    this.amount1 = parseFloat(
      (
        (this.amount2 * this.rates[this.currency1]) /
        this.rates[this.currency2]
      ).toFixed(2)
    );
  }
}
