import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickModule } from './rick/rick.module';
import { MortyModule } from './morty/morty.module';
import { RickAndMortyApiModule } from './providers/rick-and-morty-api/rick-and-morty-api.module';
import { NestFactory } from '@nestjs/core';

@Module({
  imports: [RickAndMortyApiModule, RickModule, MortyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
