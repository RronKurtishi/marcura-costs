import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cost: any;
  @Input() currentCurrency: any;
  @Input() daCurrency: any;

  public totalQuoted: number;
  public totalScreened: number;

  constructor() {
    this.totalQuoted = 0;
    this.totalScreened = 0
   }

  ngOnInit(): void {
    this.cost.costItems.forEach((costItem: any) => {
      const quoted = costItem.costs.find((exp: any) => exp.type === 'Quoted').amount;
      this.totalQuoted += quoted;
      const screened = costItem.costs.find((exp: any) => exp.type === 'Screened').amount;
      this.totalScreened += screened;
    })
  }
}
