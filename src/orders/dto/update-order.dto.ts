import { IsEnum } from 'class-validator';
import { Status } from '../../types/status';

export class UpdateOrderDto {
  @IsEnum(Status)
  status: Status;
}
