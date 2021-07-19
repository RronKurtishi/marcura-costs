import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsService } from './core/services/costs.service';
import { ExchangeRatesService } from './core/services/exchange-rates.service';
import { CostsPageComponent } from './costs-page/costs-page.component';

const routes: Routes = [
  {
    path: "",
    component: CostsPageComponent,
    resolve: {
      costs: CostsService,
      exchangeRates: ExchangeRatesService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CostsService, ExchangeRatesService]
})
export class AppRoutingModule { }
