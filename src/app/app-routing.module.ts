import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsPageComponent } from './costs-page/costs-page.component';

const routes: Routes = [
  {
    path: "",
    component: CostsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
