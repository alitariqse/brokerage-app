import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { OpenTradesComponent } from './open-trades/open-trades.component';
import { ClosedTradesComponent } from './closed-trades/closed-trades.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DashboardComponent,
    OpenTradesComponent,
    ClosedTradesComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatTableModule,
    DashboardRoutingModule,
    MatSliderModule,
    MatPaginatorModule
  ],
  exports: [
    OpenTradesComponent,
    ClosedTradesComponent
  ]
})
export class DashboardModule { }
