import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalApiCallService } from './global-api-call.service';


@Injectable({
    providedIn: 'root',
})
export class CommonService {

    public isDarkMode: boolean = false;

    private baseUrl = 'https://mocki.io/v1/';

    // Programs URL
    private programURL = this.baseUrl + '1a8cf1a9-5b52-439b-abb8-f09c8dec8009'
    // Open Trades URL
    private openTradesURL = this.baseUrl + '50bd33ad-7333-414c-8401-ec4f230dbada'
    // Closed Trades URL
    private closedTradesURL = this.baseUrl + 'fd137b44-ed0d-44dd-bee1-e5d1fbbdd693'


    constructor(
        private globalApiService: GlobalApiCallService
    ) { }

    getAllPrograms() {
        return this.globalApiService.getRequest(this.programURL)
    }

    getAllopenTrades() {
        return this.globalApiService.getRequest(this.openTradesURL)
    }

    getAllclosedTrades() {
        return this.globalApiService.getRequest(this.closedTradesURL)
    }

}
