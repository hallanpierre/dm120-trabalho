import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuminosityPageRoutingModule } from './luminosity-routing.module';

import { LuminosityPage } from './luminosity.page';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'highcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuminosityPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [LuminosityPage]
})
export class LuminosityPageModule {}
