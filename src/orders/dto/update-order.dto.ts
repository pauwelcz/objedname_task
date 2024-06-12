import { IsEnum } from 'class-validator';
import { Status } from '../entities/order.entity';

export class UpdateOrderDto {
  @IsEnum(Status)
  status: Status;
}
