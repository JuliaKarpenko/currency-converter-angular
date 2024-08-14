import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './exchange-rates-response.interface';
@Injectable({
  providedIn: 'root',
})
export class ExchangeRateService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/UAH';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(this.apiUrl);
  }
}
