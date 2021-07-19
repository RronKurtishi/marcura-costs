import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Costs } from '../core/interfaces/costs';
import { ExchangeRates } from '../core/interfaces/exchange-rates';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaymentCurrency } from '../core/interfaces/payment-currency';

@Component({
  selector: 'app-costs-page',
  templateUrl: './costs-page.component.html',
  styleUrls: ['./costs-page.component.scss']
})
export class CostsPageComponent implements OnInit, OnDestroy {
  public costs: Costs;
  public exchangeRates: ExchangeRates;
  public currencySelectForm: FormGroup;
  public selectedCurrency: PaymentCurrency;
  public daExchangeRate: number;
  public selectedExchangeRateToUsd: number;
  private routeSubscription: Subscription;
  private formSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.currencySelectForm = this.formBuilder.group({
      currencySelect: []
    });

    this.routeSubscription = this.route.data
      .subscribe(
        (data) => {
          this.costs = data['costs'];
          this.exchangeRates = data['exchangeRates'];
          this.daExchangeRate = this.costs.baseCurrency.exchangeRate;
        }
      )

    this.formSubscription = this.currencySelectForm.controls.currencySelect.valueChanges
      .subscribe(value => {
        this.selectedCurrency = this.getSelectedCurrency(value);
        this.selectedExchangeRateToUsd = this.exchangeRateToUsd(this.selectedCurrency.exchangeRate, this.daExchangeRate)
      })

    this.currencySelectForm.controls.currencySelect.setValue(this.costs.daCurrency.currency, { emitEvent: true });
  }

  exchangeRateToUsd(currencyExchangeRate: any, sourceCurrencyToUSD: any) {
    return currencyExchangeRate / sourceCurrencyToUSD;
  }

  getSelectedCurrency(value: string) {
    return this.exchangeRates.paymentCurrencies.find(currency => currency.toCurrency == value)!;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}
