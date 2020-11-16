import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuzzerLedPageRoutingModule } from './buzzer-led-routing.module';

import { BuzzerLedPage } from './buzzer-led.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuzzerLedPageRoutingModule
  ],
  declarations: [BuzzerLedPage]
})
export class BuzzerLedPageModule {}
