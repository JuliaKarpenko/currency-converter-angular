export interface ExchangeRatesResponse {
  result: string;
  base_code: string;
  rates: { [key: string]: number };
}
