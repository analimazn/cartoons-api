import { Controller, Get } from '@nestjs/common';
import { MortyService } from './morty.service';

@Controller('morty')
export class MortyController {
  constructor(private readonly mortyService: MortyService) {}

  @Get('episodes')
  async findAllEpisodes(): Promise<string[]> {
    return await this.mortyService.findAllEpisodes();
  }
}
