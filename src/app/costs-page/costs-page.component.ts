import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CostItem } from '../core/interfaces/cost-item';
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
  public selectedExchangeRate: any;
  public selectedCurrency: any;
  public daCurrency: any;
  private routeSubscription: Subscription;
  private formSubscription: Subscription;
  private costItems: CostItem[];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.routeSubscription = this.route.data
      .subscribe(
        (data) => {
          this.costs = data['costs'];
          this.exchangeRates = data['exchangeRates'];
          this.costItems = this.costs.costs[0].costItems;
          const currency: PaymentCurrency = this.exchangeRates.paymentCurrencies.find(currency => currency.toCurrency == this.costs.daCurrency.currency)!;
          
          this.daCurrency = {
            currency: this.costs.daCurrency.currency,
            exchangeRate: this.costs.baseCurrency.exchangeRate
          }

          this.selectedCurrency = {
            currency: this.costs.daCurrency.currency,
            exchangeRate: currency.exchangeRate,
          }

          this.currencySelectForm = this.formBuilder.group({
            currencySelect: [this.selectedCurrency.currency]
          });

          this.selectedExchangeRate = this.costs.baseCurrency.exchangeRate;
        }
      )

    this.formSubscription = this.currencySelectForm.controls.currencySelect.valueChanges
      .subscribe(value => {
        const currency: PaymentCurrency = this.exchangeRates.paymentCurrencies
          .find(currency => currency.toCurrency == value)!;
        this.selectedCurrency = {
          currency: value,
          exchangeRate: currency.exchangeRate,
        };
        this.selectedExchangeRate = this.calculateExchangeRate(currency.exchangeRate, this.daCurrency.exchangeRate)
      })
  }

  calculateExchangeRate(currencyExchangeRate: any, sourceCurrencyToUSD: any) {
    return currencyExchangeRate / sourceCurrencyToUSD;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }
}
