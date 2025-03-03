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

  constructor(private commonService: CommonService) {}

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
        const formattedData = data
        this.dataSource = new MatTableDataSource(formattedData); // Wrap in MatTableDataSource
        this.dataSource.paginator = this.paginator; // Set paginator after assigning data
      },

      error: (data) => {

      }
    })
  }
}
