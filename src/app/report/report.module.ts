import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { MaterialModule } from '../material.module';
import { CreateReportDialogComponent } from './create-report-dialog/create-report-dialog.component';



@NgModule({
  declarations: [
    ReportComponent,
    CreateReportDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ReportModule { }
