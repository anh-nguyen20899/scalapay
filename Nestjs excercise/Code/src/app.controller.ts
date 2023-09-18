import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({
    summary: 'API health check',
    description: 'API health check',
  })
  @ApiParam({ name: 'id', description: 'Item id' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
