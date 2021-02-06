import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StoreSummaryService } from '../service/store-summary.service';
import { StoreSummary } from '../model/store-summary';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  miniCardData: StoreSummary[];
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );
  constructor(private breakpointObserver: BreakpointObserver,
     private summaryService: StoreSummaryService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit() {
    console.log("####")
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        console.log(summaryData);
        this.miniCardData = summaryData;
      }
    });
  } 
}

