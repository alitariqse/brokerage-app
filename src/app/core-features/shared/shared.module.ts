import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    ComingSoonComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ComingSoonComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
