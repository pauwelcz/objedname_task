import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CustomersModule } from '../customers/customers.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CustomersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: {
        expiresIn: `${process.env.JWT_TOKEN_EXPIRATION_TIME || 10}s`,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
