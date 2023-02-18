export interface CreateReportDto {
  reason: string;
  deparment: string;
  reportTo: string;
  attached: Attached[];
  type: string;
  subject: string;
  title: string;
  justification: string;
}

export interface Attached {
  type: string;
  name: string;
  url: string;
}
