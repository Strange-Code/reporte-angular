import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportStatus } from './enums/report.status.enum';
import { CreateReportDto } from './interfaces/report/create-report.dto';
import { ReportListDto } from './interfaces/report/report-list.dto';
import { ResponseClientDto } from './interfaces/report/response-client.dto';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private readonly http: HttpClient) {}

  baseUrl =
    'https://us-central1-reporte-nestjs.cloudfunctions.net/reportNestjs/reporte';

  getAllReportsByStatus(status: string) {
    return this.http.get<ResponseClientDto<ReportListDto[]>>(this.baseUrl, {
      params: {
        status,
      },
    });
  }

  createReport(createReport: CreateReportDto) {
    return this.http.post<ResponseClientDto<any>>(this.baseUrl, createReport);
  }

  updateReportStatus(id: string, status: string) {
    const updateReport = { status: status };
    return this.http.put<ResponseClientDto<any>>(
      `${this.baseUrl}/${id}`,
      updateReport
    );
  }
}
