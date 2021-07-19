import { CostItem } from "./cost-item";

export interface Costs {
  daCurrency: {
    currency: string
  },
  baseCurrency: {
    currency: string,
    exchangeRate: number
  },
  costs: Array<{
    id: number,
    name: string,
    displayOrder: number,
    costItems: Array<CostItem>
  }>
}
