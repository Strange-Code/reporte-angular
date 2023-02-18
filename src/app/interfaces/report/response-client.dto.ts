import { ResultDto } from "./result.dto";

export interface ResponseClientDto<Type>{
  result: ResultDto;
  data?: Type;
}
