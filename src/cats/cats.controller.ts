import { Controller, Get, Query, Req } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(@Query('filter[ownerId]') ownerId?: string) {
    return this.catsService.findAll(ownerId);
  }
}
