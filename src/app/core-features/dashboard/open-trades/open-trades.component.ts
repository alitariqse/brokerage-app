import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-open-trades',
  templateUrl: './open-trades.component.html',
  styleUrls: ['./open-trades.component.scss']
})
export class OpenTradesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  formattedData: any = [];
  pageSize = 10;
  pageSizeOptions = [10, 20, 50, 100];
  constructor(private commonService: CommonService) { }

  dataSource = new MatTableDataSource<any>()
  actualColumns: string[] = [
    'Account_ID',
    'Entry_Date',
    'Symbol',
    'Position_Size',
    'Entry_Price',
    'Qty',
    'Fee'
  ];

  ngOnInit(): void {
    this.getOpenTrades()
  }

  getOpenTrades() {
    this.commonService.getAllopenTrades().subscribe({
      next: (data) => {
        this.formattedData = data
        this.dataSource.data = this.formattedData; // Assign data instead of creating a new instance
        this.dataSource.paginator = this.paginator; // Reassign paginator after data update
      },

      error: (data) => {

      }
    })
  }
}
