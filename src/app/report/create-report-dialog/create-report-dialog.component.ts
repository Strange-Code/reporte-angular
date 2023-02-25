import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportTypesDto } from 'src/app/interfaces/reportComponents/reportType.dto';
import { ReportService } from 'src/app/report.service';

@Component({
  selector: 'app-create-report-dialog',
  templateUrl: './create-report-dialog.component.html',
  styleUrls: ['./create-report-dialog.component.css'],
})
export class CreateReportDialogComponent {
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

  constructor(
    private formBuilder: FormBuilder,
    private readonly reportService: ReportService,
    public dialogRef: MatDialogRef<CreateReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formGroup = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      reason: [null, Validators.required],
      department: [null, Validators.required],
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
      this.dialogRef.close();
      //this.getAllReports();
    });
  }

  getErrorReason() {
    return 'Not valid reason';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
