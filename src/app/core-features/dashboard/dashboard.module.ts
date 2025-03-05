import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { OpenTradesComponent } from './open-trades/open-trades.component';
import { ClosedTradesComponent } from './closed-trades/closed-trades.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    OpenTradesComponent,
    ClosedTradesComponent,
    AccountOverviewComponent,
    DashboardHeaderComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    MatTableModule,
    DashboardRoutingModule,
    MatSliderModule,
    MatPaginatorModule,
    SharedModule
  ],
  exports: [
    OpenTradesComponent,
    ClosedTradesComponent,
    AccountOverviewComponent,
    DashboardHeaderComponent,
    AccountDetailsComponent
  ]
})
export class DashboardModule { }
