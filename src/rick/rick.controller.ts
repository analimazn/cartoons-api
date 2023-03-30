import { Controller, Get } from '@nestjs/common';
import { RickService } from './rick.service';

@Controller('rick')
export class RickController {
  constructor(private readonly rickService: RickService) {}

  @Get('episodes')
  async findAllEpisodes(): Promise<string[]> {
    try {
      return await this.rickService.findAllEpisodes();
    } catch (error) {
      console.log(error);
    }
  }
}
