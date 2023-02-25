import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ReportStatus } from './enums/report.status.enum';
import { ReportTypesDto } from './interfaces/reportComponents/reportType.dto';
import { ModalRegisterComponent } from './modal-register/modal-register.component';
import { ReportService } from './report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reporte-angular';
}
