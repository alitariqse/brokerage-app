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

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  mode = localStorage.getItem('theme')
  profitTarget = 131.69;
  maxLoss = 0.00;
  dailyPause = 300;
  // Chart type
  lineChartType: ChartType = 'line';

  // Chart labels (X-axis labels)
  lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Chart data
  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.lineChartLabels,  // Assign labels here
    datasets: [
      {
        data: [10, 15, 14, 18, 20, 18, 24, 26, 27, 28, 29, 38], // Example data points
        label: 'Series A',
        fill: true,
        tension: 0.4, // Curve effect
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        borderWidth: 2
      }
    ]
  };

  // Chart options
  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        ticks: {
          display: false 
        },
        grid: {
          drawTicks: false, // Hide tick marks on Y-axis
        }
      },
      y: {
        min: 0,
        max: 100,
      }
    }
  };

  // Show legend
  lineChartLegend = false;


  constructor(public commonService: CommonService) {

  }
}
