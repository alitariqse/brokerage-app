import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  mode = localStorage.getItem('theme')
  profitTarget = 131.69;
  maxLoss = 0.00;
  dailyPause = 300;

  constructor(public commonService: CommonService) {

  }
}
