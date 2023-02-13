import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportListDto } from './interfaces/report/report-list.dto';
import { ResponseClientDto } from './interfaces/report/response-client.dto';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private readonly http: HttpClient) {}

  getAllReports() {
    return this.http.get<ResponseClientDto<ReportListDto[]>>(
      'https://us-central1-reporte-nestjs.cloudfunctions.net/reportNestjs/reporte'
    );
  }
}
