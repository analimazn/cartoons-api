import { Module } from '@nestjs/common';
import { RickAndMortyApiModule } from '../providers/rick-and-morty-api/rick-and-morty-api.module';
import { RickController } from './rick.controller';
import { RickService } from './rick.service';

@Module({
  controllers: [RickController],
  providers: [RickService],
  imports: [RickAndMortyApiModule],
})
export class RickModule {}
