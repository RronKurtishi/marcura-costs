import { Component, Input, OnInit } from '@angular/core';
import { CostItem } from 'src/app/core/interfaces/cost-item';
import { CostItemCost } from 'src/app/core/interfaces/cost-item-cost';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() costItem: CostItem;
  @Input() currentCurrency: any;
  @Input() daCurrency: any;

  public screened: CostItemCost;
  public quoted: CostItemCost;
  public showComments: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.quoted = this.costItem.costs.find(exp => exp.type === 'Quoted')!;
    this.screened = this.costItem.costs.find(exp => exp.type === 'Screened')!;
  }

}
