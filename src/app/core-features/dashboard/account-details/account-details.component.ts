import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {

    constructor(public commonService: CommonService){
  
    }

}
