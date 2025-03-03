import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliationRoutingModule } from './affiliation-routing.module';
import { AffiliationComponent } from './affiliation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AffiliationComponent
  ],
  imports: [
    CommonModule,
    AffiliationRoutingModule,
    SharedModule
  ]
})
export class AffiliationModule { }
