import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReportStatus } from '../enums/report.status.enum';
import { ReportTypesDto } from '../interfaces/reportComponents/reportType.dto';
import { ReportService } from '../report.service';
import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent {
  reports: any;
  selectedTabIndex = 0;

  constructor(
    private readonly reportService: ReportService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllReportsByStatus(ReportStatus.CREADO);
    this.selectedTabIndex = 0;
  }

  onTabChanged($event: any) {
    const index = $event.index;
    switch (index) {
      case 0:
        this.getAllReportsByStatus(ReportStatus.CREADO);
        break;
      case 1:
        this.getAllReportsByStatus(ReportStatus.EN_PROGRESO);
        break;
      default:
        this.getAllReportsByStatus(ReportStatus.SOLUCIONADO);
        break;
    }
  }

  updateReportStatus(id: string, reportStatus: string) {
    return this.reportService
      .updateReportStatus(id, reportStatus)
      .subscribe((res) => {
        console.log('Form data update status response:', JSON.stringify(res));
        //this.getAllReportsByStatus();
      });
  }

  getAllReportsByStatus(status: string) {
    return this.reportService.getAllReportsByStatus(status).subscribe((res) => {
      this.reports = res.data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateReportDialogComponent, {
      data: { name: 'test' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onTabChanged({ index: this.selectedTabIndex });
      console.log('The dialog was closed: ', JSON.stringify(result));
    });
  }
}
