import { CostItemCost } from "./cost-item-cost";
import { CostItemComment } from "./cost-item-comment";

export interface CostItem {
  id: number,
  name: string,
  costItemAlias: {
    accountingCode: string
  },
  annotations: {
    id: number,
    name: string
  },
  costs: Array<CostItemCost>,
  comments: Array<CostItemComment>
}