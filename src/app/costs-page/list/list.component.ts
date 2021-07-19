import { Component, Input, OnInit } from '@angular/core';
import { CostItemCost } from 'src/app/core/interfaces/cost-item-cost';
import { PaymentCurrency } from 'src/app/core/interfaces/payment-currency';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cost: any;
  @Input() currentCurrency: PaymentCurrency;
  @Input() daExchangeRate: number;

  public totalQuoted: number;
  public totalScreened: number;

  constructor() {
    this.totalQuoted = 0;
    this.totalScreened = 0
   }

  ngOnInit(): void {
    // Calculate total amounts
    this.cost.costItems.forEach((costItem: any) => {
      this.totalQuoted += costItem.costs.find((cost: CostItemCost) => cost.type === 'Quoted').amount;
      this.totalScreened += costItem.costs.find((cost: CostItemCost) => cost.type === 'Screened').amount;;
    })
  }
}
