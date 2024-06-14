import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { Status } from '../types/status';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  create(): Promise<Order> {
    const order = this.ordersRepository.create();
    order.status = Status.ORDERED;
    return this.ordersRepository.save(order);
  }

  findAll(): Promise<Order[]> {
    return this.ordersRepository.find();
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.ordersRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Order with id ${id} does not exist.`);
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.findOne(id);

    return this.ordersRepository.save({
      ...updateOrderDto,
      updated_at: new Date(),
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.ordersRepository.softDelete(id);
  }
}
