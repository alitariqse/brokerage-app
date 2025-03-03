import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreLayoutModule } from './core-layout/core-layout.module';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CreateOrderComponent } from './core-features/create-order/create-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ComingSoonComponent } from './core-features/shared/coming-soon/coming-soon.component';
import { SharedModule } from './core-features/shared/shared.module';

@NgModule({
  declarations: [AppComponent, CreateOrderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreLayoutModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgChartsModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    DecimalPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
