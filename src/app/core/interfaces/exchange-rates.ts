import { PaymentCurrency } from "./payment-currency";

export interface ExchangeRates {
  sourceCurrencies: string,
  paymentCurrencies: Array<PaymentCurrency>
}