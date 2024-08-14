export interface ExchangeRatesResponse {
  rates: { [currencyCode: string]: number };
  base: string;
  date: string;
}
