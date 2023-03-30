import { Injectable } from '@nestjs/common';
import { RickAndMortyApiService } from '../providers/rick-and-morty-api/rick-and-morty-api.service';

@Injectable()
export class RickService {
  constructor(
    private readonly rickAndMortyApiService: RickAndMortyApiService,
  ) {}

  async findAllEpisodes(): Promise<string[]> {
    const data = await this.rickAndMortyApiService.getCharacters();
    const episodes = data.results.flatMap((item) => item.episode);

    return episodes;
  }
}
