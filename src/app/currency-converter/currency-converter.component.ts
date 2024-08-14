import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  @Input() rates!: { [key: string]: number };
  amount1: number = 0;
  amount2: number = 0;
  currency1: string = 'USD';
  currency2: string = 'UAH';
  currencies: string[] = ['USD', 'EUR', 'UAH'];

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

  swapCurrencies() {
    const temp = this.currency1;
    this.currency1 = this.currency2;
    this.currency2 = temp;
    this.convertCurrency1();
  }

  selectCurrency(selectedCurrency: string) {
    if (
      this.currency1 !== selectedCurrency &&
      this.currency2 !== selectedCurrency
    ) {
      this.currency2 = selectedCurrency;
      this.convertCurrency1();
    }
  }

  objectKeys(obj: { [key: string]: number }): string[] {
    return Object.keys(obj);
  }

  getCurrencyImage(currency: string): string {
    switch (currency) {
      case 'USD':
        return '/assets/icons/USD.png';
      case 'EUR':
        return 'assets/icons/EUR.png';
      case 'UAH':
        return 'assets/icons/UAH.png';
      default:
        return '';
    }
  }

  dropdownOpen1 = false;
  dropdownOpen2 = false;

  toggleDropdown1() {
    this.dropdownOpen1 = !this.dropdownOpen1;
  }

  toggleDropdown2() {
    this.dropdownOpen2 = !this.dropdownOpen2;
  }

  selectCurrency1(currency: string) {
    this.currency1 = currency;
    this.convertCurrency1();
    this.dropdownOpen1 = false;
  }

  selectCurrency2(currency: string) {
    this.currency2 = currency;
    this.convertCurrency2();
    this.dropdownOpen2 = false;
  }
}
