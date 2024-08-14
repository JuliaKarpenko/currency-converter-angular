import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  rates: any;

  constructor(private exchangeRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.exchangeRateService.getExchangeRates().subscribe((data) => {
      this.rates = data.rates;
    });
  }
}
