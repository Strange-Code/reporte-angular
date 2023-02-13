import { Component, OnInit } from '@angular/core';
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reporte-angular';
  reports: any;

  constructor(private readonly reportService: ReportService) {}

  ngOnInit(): void {
    this.getAllReports();
  }

  getAllReports() {
    return this.reportService.getAllReports().subscribe((res) => {
      this.reports = res.data;
    });
  }
}
