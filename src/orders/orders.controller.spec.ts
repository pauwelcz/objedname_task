import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order, Status } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

let controller: OrdersController;

async function createOrderTest(): Promise<Order> {
  const order = await controller.create();
  expect(order).toBeDefined();
  expect(order.status).toBe(Status.ORDERED);

  return order;
}

describe('OrdersController', () => {
  const nonExistingId = 0;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          database: process.env.MYSQL_DATABASE || 'objedname',
          host: process.env.MYSQL_SQL_HOST || 'localhost',
          port: parseInt(process.env.MYSQL_SQL_PORT) || 3306,
          username: process.env.MYSQL_ROOT_PASSWORD || 'root',
          password: process.env.MYSQL_ROOT_PASSWORD || 'root',
          entities: [Order],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Order]),
      ],
      providers: [OrdersService],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  describe('GET', () => {
    it('should return 2 (or more) orders', async () => {
      const order1 = await createOrderTest();
      const order2 = await createOrderTest();

      const orders = await controller.findAll();
      expect(orders.length).toBeGreaterThanOrEqual(2);
      await controller.remove(order1.id);
      await controller.remove(order2.id);
    });
  });

  describe('GET :id', () => {
    it('should throw error (order to find does not exist)', async () => {
      await expect(controller.remove(nonExistingId)).rejects.toEqual(
        new NotFoundException(`Order with id ${nonExistingId} does not exist.`),
      );
    });
    it('should return order by its id', async () => {
      const order = await createOrderTest();

      const findedOrder = await controller.findOne(order.id);
      expect(findedOrder).toBeDefined();
      await controller.remove(order.id);
    });
  });

  describe('POST', () => {
    it('should create new order', async () => {
      const order = await createOrderTest();

      await controller.remove(order.id);
    });
  });

  describe('PATCH', () => {
    it('should throw error (order to update does not exist)', async () => {
      await expect(controller.remove(nonExistingId)).rejects.toEqual(
        new NotFoundException(`Order with id ${nonExistingId} does not exist.`),
      );
    });

    it('should succesfully update item', async () => {
      let order = await createOrderTest();

      order = await controller.update(order.id, { status: Status.COMPLETED });
      expect(order.status).toBe(Status.COMPLETED);

      await controller.remove(order.id);
    });
  });

  describe('DELETE', () => {
    it('should throw error (order to remove does not exist)', async () => {
      await expect(controller.remove(nonExistingId)).rejects.toEqual(
        new NotFoundException(`Order with id ${nonExistingId} does not exist.`),
      );
    });

    it('should succesfully remove order', async () => {
      const order = await createOrderTest();

      await controller.remove(order.id);

      await expect(controller.findOne(order.id)).rejects.toEqual(
        new NotFoundException(`Order with id ${order.id} does not exist.`),
      );
    });
  });
});
