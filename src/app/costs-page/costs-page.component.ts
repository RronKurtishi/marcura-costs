import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Costs } from '../core/interfaces/costs';
import { ExchangeRates } from '../core/interfaces/exchange-rates';

@Component({
  selector: 'app-costs-page',
  templateUrl: './costs-page.component.html',
  styleUrls: ['./costs-page.component.scss']
})
export class CostsPageComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public costs: Costs;
  public exchangeRates: ExchangeRates;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.data
    .subscribe(
      (data) => {
        this.costs = data['costs'];
        console.log(this.costs);
        this.exchangeRates = data['exchangeRates'];
        console.log(this.exchangeRates)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
