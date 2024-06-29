import { Controller, Get, HttpCode, Header } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  @Header('Pragma', 'no-cache')
  @Header('Expires', '0')
  healthCheck(): object {
    return { message: 'App is running' };
  }
}
