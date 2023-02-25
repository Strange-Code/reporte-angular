import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ReportModule { }
