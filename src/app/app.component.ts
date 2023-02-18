import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ReportStatus } from './enums/report.status.enum';
import { ReportTypesDto } from './interfaces/reportComponents/reportType.dto';
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reporte-angular';
  reports: any;
  types: ReportTypesDto[] = [
    {
      value: 'Alto',
      viewValue: 'Reporte Alto',
    },
    {
      value: 'Medio',
      viewValue: 'Reporte Medio',
    },
    {
      value: 'Bajo',
      viewValue: 'Reporte Bajo',
    },
  ];
  formGroup: FormGroup;
  name: string = '';
  animal: string = '';
  selectedTabIndex = 1;

  constructor(
    private readonly reportService: ReportService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.formGroup = this.createForm();
  }

  ngOnInit(): void {
    this.getAllReportsByStatus(ReportStatus.CREADO);
    this.selectedTabIndex = 1;
  }

  onTabChanged($event: any) {
    const index = $event.index;
    switch (index) {
      case 0:
        break;
      case 1:
        this.getAllReportsByStatus(ReportStatus.CREADO);
        break;
      case 2:
        this.getAllReportsByStatus(ReportStatus.EN_PROGRESO);
        break;
      case 3:
        this.getAllReportsByStatus(ReportStatus.SOLUCIONADO);
        break;
      default:
        break;
    }
  }

  createForm() {
    return this.formBuilder.group({
      reason: [null, Validators.required],
      deparment: [null, Validators.required],
      reportTo: [null, Validators.required],
      type: [null, Validators.required],
      subject: [null, Validators.required],
      title: [null, Validators.required],
      justification: [null, Validators.required],
    });
  }

  onSubmit(data: any) {
    const mockData = {
      attached: [
        {
          type: 'pdf',
          name: 'reporte.pdf',
          url: 'url',
        },
      ],
      ...data,
    };
    this.reportService.createReport(mockData).subscribe((res) => {
      console.log('Form data response:', JSON.stringify(res));
      //this.getAllReports();
    });
  }

  updateReportStatus(id: string, reportStatus: string) {
    return this.reportService
      .updateReportStatus(id, reportStatus)
      .subscribe((res) => {
        console.log('Form data update status response:', JSON.stringify(res));
        //this.getAllReportsByStatus();
      });
  }
  /*   openDialog(): void {
    const dialogRef = this.dialog.open(ReportFormDialog, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  } */

  getErrorReason() {
    return 'Not valid reason';
  }
  getAllReportsByStatus(status: string) {
    return this.reportService.getAllReportsByStatus(status).subscribe((res) => {
      this.reports = res.data;
    });
  }
}

/* @Component({
  selector: 'report-form-dialog',
  templateUrl: './report-form-dialog.html',
})
export class ReportFormDialog {
  constructor(
    public dialogRef: MatDialogRef<ReportFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
} */
