import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  allPrograms: any[] = [];
  isLoading: boolean = true;

  constructor(private commonService: CommonService) {

  }

  typesList: any[] = [
    {
      name: 'Evaluation',
      color: `#f6559f`
    },
    {
      name: 'Competition',
      color: `#3f69e2`
    },
    {
      name: 'Funded',
      color: `#6d07fc`
    },
    {
      name: 'Demo',
      color: `#399ca5`
    },
  ]

  getColor(type: string): string {
    return this.typesList.find(x => x.name === type)?.color
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'bg-success text-white';  // Green for Active
      case 'Pending':
        return 'bg-warning text-dark';   // Yellow for Pending
      case 'Completed':
        return 'bg-primary text-white';  // Blue for Completed
      default:
        return 'bg-secondary text-white'; // Gray for unknown status
    }
  }

  ngOnInit(): void {
    this.getAllPrograms()
  }

  getAllPrograms() {
    this.commonService.getAllPrograms().subscribe({
      next: (data) => {
        if (data?.programs?.length) {
          this.allPrograms = data.programs
        }
        setTimeout(() => {
          this.isLoading = false
        }, 500);
      },

      error: (data) => {
        this.isLoading = false
      }
    })
  }

}
