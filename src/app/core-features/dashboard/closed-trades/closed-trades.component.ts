import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-closed-trades',
  templateUrl: './closed-trades.component.html',
  styleUrls: ['./closed-trades.component.scss']
})
export class ClosedTradesComponent implements OnInit, AfterViewInit {
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
  formattedData: any = [];
  pageSize = 10;
  pageSizeOptions = [10, 20, 50, 100];
  isLoading: boolean = true;
  constructor(public commonService: CommonService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getClosedTrades()
  }

  getClosedTrades() {
    this.commonService.getAllclosedTrades().subscribe({
      next: (data) => {
        this.formattedData = data.map(element => {
          return {
            ...element,
            pnl: (element?.Entry_Price - element?.Exit_Price).toFixed(2) || '0.00',
            status: (element?.Entry_Price - element?.Exit_Price) >= 0 ? 'Win' : 'Loss',
          }
        })

        this.dataSource.data = this.formattedData; // Assign data instead of creating a new instance
        this.dataSource.paginator = this.paginator; // Reassign paginator after data update
        this.cdr.detectChanges(); // Force Angular to detect changes
        setTimeout(() => {
          this.isLoading = false
        }, 500);
      },

      error: (data) => {
        this.isLoading = false
      }
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Set paginator after assigning data

  }
}
