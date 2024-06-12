import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private customersService: CustomersService,
  ) {}

  async generateNewToken(authDto: AuthDto): Promise<string> {
    const { email } = authDto;
    await this.customersService.findByEmail(email);
    return this.jwtService.signAsync({
      email,
    });
  }
}
