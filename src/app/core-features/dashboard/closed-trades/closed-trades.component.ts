import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-closed-trades',
  templateUrl: './closed-trades.component.html',
  styleUrls: ['./closed-trades.component.scss']
})
export class ClosedTradesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<any>()
  actualColumns: string[] = [
    'Account_ID',
    'Entry_Date',
    'Exit_Date',
    'Symbol',
    'Position_Size',
    'Entry_Price',
    'Exit_Price',
    'Qty',
    'Fee',
    'pnl',
    'status'
  ];

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.getClosedTrades()
  }

  getClosedTrades() {
    this.commonService.getAllclosedTrades().subscribe({
      next: (data) => {
        const formattedData = data.map(element => {
          return {
            ...element,
            pnl: (element?.Entry_Price - element?.Exit_Price).toFixed(2) || '0.00',
            status: (element?.Entry_Price - element?.Exit_Price) >= 0 ? 'Win' : 'Loss',
          }
        })
          this.dataSource = new MatTableDataSource(formattedData); // Wrap in MatTableDataSource
          this.dataSource.paginator = this.paginator; // Set paginator after assigning data
    
      },

      error: (data) => {

      }
    })
  }
}
