import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {

  constructor(public commonService: CommonService){

  }

}
