import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RickAndMortyApiService } from './rick-and-morty-api.service';

@Module({
  imports: [HttpModule],
  providers: [RickAndMortyApiService],
  exports: [RickAndMortyApiService],
})
export class RickAndMortyApiModule {}
