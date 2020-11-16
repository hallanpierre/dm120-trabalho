import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuzzerLedPage } from './buzzer-led.page';

const routes: Routes = [
  {
    path: '',
    component: BuzzerLedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuzzerLedPageRoutingModule {}
