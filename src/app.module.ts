import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { Customer } from './customers/entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_SQL_HOST || 'localhost',
      port: parseInt(process.env.MYSQL_SQL_PORT) || 3306,
      username: process.env.MYSQL_ROOT_PASSWORD || 'root',
      password: process.env.MYSQL_ROOT_PASSWORD || 'root',
      database: process.env.MYSQL_DATABASE || 'objedname',
      entities: [Customer],
      synchronize: false,
    }),
    OrdersModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
