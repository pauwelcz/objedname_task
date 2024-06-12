import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('token')
  async generateNewToken(@Body() authDto: AuthDto): Promise<string> {
    return this.authService.generateNewToken(authDto);
  }
}
