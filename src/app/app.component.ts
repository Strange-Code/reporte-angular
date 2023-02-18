import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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

  constructor(
    private readonly reportService: ReportService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.formGroup = this.createForm();
  }

  ngOnInit(): void {
    this.getAllReports();
    this.createForm();
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
    console.log('Form data:', JSON.stringify(data));
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
  getAllReports() {
    return this.reportService.getAllReports().subscribe((res) => {
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
