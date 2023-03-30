import { Module } from '@nestjs/common';
import { RickAndMortyApiModule } from '../providers/rick-and-morty-api/rick-and-morty-api.module';
import { MortyController } from './morty.controller';
import { MortyService } from './morty.service';

@Module({
  controllers: [MortyController],
  providers: [MortyService],
  imports: [RickAndMortyApiModule],
})
export class MortyModule {}
