import { Component, Input, OnInit } from '@angular/core';
import { CostItem } from 'src/app/core/interfaces/cost-item';
import { CostItemCost } from 'src/app/core/interfaces/cost-item-cost';
import { PaymentCurrency } from 'src/app/core/interfaces/payment-currency';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() costItem: CostItem;
  @Input() currentCurrency: PaymentCurrency;
  @Input() daExchangeRate: number;

  public screened: CostItemCost;
  public quoted: CostItemCost;
  public showComments: boolean;

  constructor() { }

  ngOnInit(): void {
    this.quoted = this.costItem.costs.find((cost: CostItemCost) => cost.type === 'Quoted')!;
    this.screened = this.costItem.costs.find((cost: CostItemCost) => cost.type === 'Screened')!;
  }
}
