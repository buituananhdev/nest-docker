import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class AppController {
  @Get()
  healthCheck(): string {
    return 'App is running';
  }
}
